# Super Contador

Aplicação web simples para contar números em sequência, com frontend em HTML/CSS/JavaScript e backend leve em Node.js/Express.

## Descrição

O `Super Contador` permite inserir um valor de início, um valor de fim e um passo para gerar uma sequência numérica. O projeto também inclui um servidor Express para servir os arquivos estáticos do frontend e uma rota de status.

## Estrutura do projeto

- `Super contador/public/index.html` – página principal com o formulário de contagem.
- `Super contador/public/estilo.css` – estilos visuais da página.
- `Super contador/public/script.js` – lógica de validação e geração da contagem.
- `Super contador/src/server.js` – servidor Express que serve os arquivos estáticos e disponibiliza a rota `GET /api/status`.
- `Super contador/package.json` – dependências e scripts do projeto.

## Como usar

1. Instale as dependências:

   ```bash
   cd "Super contador"
   npm install
   ```

2. Inicie o servidor:

   ```bash
   npm start
   ```

3. Abra no navegador:

   ```text
   http://localhost:3000
   ```

4. Insira os valores de `Início`, `Fim` e `Passo` e clique em `Contar`.

## Regras de validação

- `Início`, `Fim` e `Passo` devem ser maiores que zero.
- `Passo` não pode ser maior que `Fim`.
- `Início` não pode ser maior que `Fim`.
- Se algum valor for inválido, o app exibe um `alert()` e mostra `Impossível contar`.

## Funcionalidades

- Mostra uma mensagem de boas-vindas com `alert()` ao carregar a página.
- Gera a sequência numérica do `Início` ao `Fim` usando o `Passo` informado.
- Exibe o resultado com setas e bandeira ao final.
- Servidor backend com Express e suporte a CORS.
- Rota de status disponível em `/api/status`.

## Scripts disponíveis

- `npm start` — inicia o servidor usando `nodemon`.
- `npm test` — placeholder para testes com `jest` (sem testes configurados atualmente).

## Observações

- O servidor serve os arquivos estáticos a partir da pasta `public`.
- O frontend está em `Super contador/public`, portanto abra o projeto a partir dessa pasta ao executar localmente.
