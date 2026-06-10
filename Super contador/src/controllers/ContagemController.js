const Contagem = require('../models/Contagem');

module.exports = {
    // FUNÇÃO PARA LISTAR (READ)
    async index(req, res) {
        try {
            // Busca todas as contagens do banco, ordenando pelas mais recentes
            const contagens = await Contagem.findAll({
                order: [['createdAt', 'DESC']]
            });
            return res.json(contagens);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao buscar histórico.' });
        }
    },

    // FUNÇÃO PARA SALVAR (CREATE)
    async store(req, res) {
        const { inicio, fim, passo } = req.body;

        // 1. Nova Validação: Apenas o PASSO não pode ser zero ou negativo.
        // Supera a limitação original de não permitir valores negativos ou zero em todos os campos [1].
        if (!passo || passo <= 0) {
            return res.status(400).json({ error: 'Passo inválido! Deve ser maior que zero.' });
        }

        let resultadoArr = [];
        let ini = Number(inicio);
        let f = Number(fim);
        let p = Number(passo);

        if (ini < f) {
            // CONTAGEM CRESCENTE: Mantém a lógica original de incremento [2, 3].
            for (let i = ini; i <= f; i += p) {
                resultadoArr.push(i);
            }
        } else {
            // CONTAGEM REGRESSIVA: Supera a limitação original de não suportar regressões [1].
            for (let i = ini; i >= f; i -= p) {
                resultadoArr.push(i);
            }
        }

        // Formata o resultado com as setinhas e a bandeira final, conforme o design original [3].
        const resultadoFinal = resultadoArr.join(' 👉 ') + ' 🏁';

        try {
            // Salva no banco de dados SQLite para garantir a persistência dos dados.
            const contagem = await Contagem.create({
                inicio: ini,
                fim: f,
                passo: p,
                resultado: resultadoFinal
            });

            return res.json(contagem);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao salvar no banco de dados.' });
        }
    },

    // FUNÇÃO PARA EXCLUIR (DELETE)
    async destroy(req, res) {
        const { id } = req.params;

        try {
            const contagem = await Contagem.findByPk(id);

            if (!contagem) {
                return res.status(404).json({ error: 'Contagem não encontrada.' });
            }

            await contagem.destroy(); // Remove o registro do banco de dados SQLite.
            return res.json({ message: 'Contagem excluída com sucesso!' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao excluir o registro.' });
        }
    }
};