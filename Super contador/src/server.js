const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurações para o servidor entender JSON e permitir acesso (CORS)
app.use(cors());
app.use(express.json());

// Indica que seus arquivos originais (modelo.html, etc) estão na pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rota inicial de teste
app.get('/api/status', (req, res) => {
    res.json({ mensagem: "Servidor do Super Contador está rodando!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});