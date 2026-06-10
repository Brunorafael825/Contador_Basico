const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./models/database');
const Contagem = require('./models/Contagem');
const app = express();
const PORT = 3000;
const contagemRoutes = require('./routes/contagemRoutes');

// Configurações para o servidor entender JSON e permitir acesso (CORS)
app.use(cors());
app.use(express.json());
app.use('/api/contagem', contagemRoutes);


// Indica que seus arquivos originais (modelo.html, etc) estão na pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rota inicial de teste
app.get('/api/status', (req, res) => {
    res.json({ mensagem: "Servidor do Super Contador está rodando!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Sincroniza o banco de dados
db.sync()
  .then(() => console.log('Banco de dados conectado e tabelas criadas!'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));