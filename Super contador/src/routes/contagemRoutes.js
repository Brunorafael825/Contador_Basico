const express = require('express');
const router = express.Router();
const ContagemController = require('../controllers/ContagemController');

// Rota para CRIAR uma nova contagem (C do CRUD)
// Processa a lógica de início, fim e passo vinda do formulário [2]
router.post('/contar', ContagemController.store);

// Rota para LISTAR o histórico (R do CRUD)
// Resolve a limitação original de não salvar os dados das contagens [1]
router.get('/historico', ContagemController.index);

// Rota para EXCLUIR uma contagem específica (D do CRUD) - Novidade do Dia 8
// Permite remover registros do banco de dados SQLite usando o ID
router.delete('/:id', ContagemController.destroy);

// Exporta o roteador UMA ÚNICA VEZ com todas as rotas configuradas
module.exports = router;