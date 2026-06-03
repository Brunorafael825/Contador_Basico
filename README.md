# Super Contador

Projeto simples de contador em HTML, CSS e JavaScript.

## Descrição

O `Super Contador` é uma pequena aplicação web que permite ao usuário inserir um valor de início, um valor de fim e um passo para gerar uma sequência numérica. A aplicação valida os valores e exibe o resultado diretamente na página.

## Arquivos do projeto

- `modelo.html` – Estrutura da página com campos de entrada e botão para iniciar a contagem.
- `estilo.css` – Estilos visuais da página, incluindo cabeçalho, seção central e rodapé.
- `script.js` – Lógica de validação e contagem com JavaScript.

## Como funciona

1. O usuário abre `modelo.html` em um navegador.
2. O usuário insere os números nos campos:
   - `Início do contador`
   - `Fim do contador`
   - `Passo do contador`
3. O usuário clica no botão `Contar`.
4. O JavaScript coleta os valores dos campos e valida:
   - todos os valores devem ser maiores que zero;
   - o `passo` não pode ser maior que o `fim`;
   - o `início` não pode ser maior que o `fim`.
5. Se algum valor for inválido, o aplicativo exibe um `alert()` de erro e mostra `Impossível contar` no resultado.
6. Se todos os valores estiverem corretos, o aplicativo gera a sequência e mostra na área de resultado.

## Detalhes da implementação

### `modelo.html`

- Importa `estilo.css` para o visual.
- Tem três campos do tipo `number` para entrada de valores.
- Possui um botão que chama a função `contar()` de `script.js`.
- O resultado aparece dentro da `div` com `id="resultado"`.

### `estilo.css`

- Define um fundo em tons de azul para o body.
- Centraliza o texto e usa fonte `Arial`.
- Estiliza a seção principal com fundo branco, bordas arredondadas e sombras.
- Define cor e alinhamento para cabeçalho e rodapé.

### `script.js`

- Exibe um alerta de boas-vindas assim que a página carrega.
- A função `contar()` lê os valores de `inicio`, `fim` e `passo`.
- Faz validações básicas e interrompe a execução com mensagens de erro.
- Gera a contagem com um laço `for` e adiciona setas e uma bandeira ao final.

## Uso

1. Abra o arquivo `modelo.html` no navegador.
2. Digite `Início`, `Fim` e `Passo`.
3. Clique em `Contar`.
4. Veja a sequência exibida abaixo do botão.

## Limitações conhecidas

- O programa não permite valores negativos ou zero.
- Não há suporte para regressões (contar de um número maior para um número menor).
- O passo não pode ser maior que o fim, mesmo quando o início também é menor.
- A validação é bastante simples e não verifica números decimais, apenas converte para `Number`.

## Melhorias possíveis

- Permitir contagem decrescente quando o início for maior que o fim.
- Aceitar `passo` maior que o fim sempre que fizer sentido para a direção da contagem.
- Adicionar animação ao resultado.
- Melhorar a acessibilidade e a experiência móvel.

---

Desenvolvido como um protótipo de contador em JavaScript.
