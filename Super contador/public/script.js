alert('Olá, seja bem-vindo(a)')

// Função principal conectada ao BACK-END 
async function contar() {
    // Certifique-se que estes IDs (txti, txtf, txtp) são os mesmos do seu modelo.html [1]
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let pas = document.getElementById('passo');
    let res = document.getElementById('resultado');

    // Validação básica no front antes de enviar
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos.';
        return;
    }

    const dados = {
        inicio: Number(ini.value),
        fim: Number(fim.value),
        passo: Number(pas.value)
    };

    try {
        // Envia para o servidor para processar e SALVAR no banco de dados [2]
        const resposta = await fetch('http://localhost:3000/api/contagem/contar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            // Exibe o resultado que o servidor gerou (com as setinhas e bandeira) [1]
            res.innerHTML = `<p>${resultado.resultado}</p>`;
            
            // Atualiza a lista de histórico automaticamente
            carregarHistorico();
        } else {
            // Exibe o erro vindo das validações do Controller
            res.innerHTML = `<p style="color: red;">${resultado.error}</p>`;
        }
    } catch (erro) {
        res.innerHTML = '<p>Erro: Certifique-se que o servidor está rodando (npm start).</p>';
    }
}

// Mantém sua função de carregar histórico que já está correta
async function carregarHistorico() {
    const lista = document.getElementById('lista-historico');
    if (!lista) return;

    try {
        const resposta = await fetch('http://localhost:3000/api/contagem/historico');
        const contagens = await resposta.json();

        lista.innerHTML = ''; 

        contagens.forEach(c => {
            const item = document.createElement('div');
            item.className = 'historico-card'; // Aplica a nova classe CSS

            item.innerHTML = `
                <div class="info-contagem">
                    <strong>Início:</strong> ${c.inicio} | 
                    <strong>Fim:</strong> ${c.fim} | 
                    <strong>Passo:</strong> ${c.passo} <br> 
                    <small style="display: block; margin-top: 5px; color: #555;">
                        ${c.resultado}
                    </small>
                </div>
                <button class="btn-excluir" onclick="deletarContagem(${c.id})" title="Excluir contagem">🗑️</button>
            `;
            lista.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao buscar histórico:', erro);
    }
}

window.onload = carregarHistorico;
async function deletarContagem(id) {
    if (confirm('Tem certeza que deseja excluir esta contagem?')) {
        try {
            const resposta = await fetch(`http://localhost:3000/api/contagem/${id}`, {
                method: 'DELETE'
            });

            if (resposta.ok) {
                carregarHistorico(); // Recarrega a lista após excluir
            } else {
                alert('Erro ao excluir do servidor.');
            }
        } catch (erro) {
            alert('Erro de conexão.');
        }
    }
}