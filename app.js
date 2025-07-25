// Importa o framework Express, o núcleo da nossa aplicação.
const express = require('express');
// Importa o módulo 'path' do Node.js. Ele fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
const path = require('node:path');
// Importa o arquivo de rotas que definimos para as tarefas.
const taskRoutes = require('./routes/taskRoutes');


// Cria uma instância do aplicativo Express. 'app' é o objeto principal que representa nossa aplicação web.
const app = express();

// --- CONFIGURAÇÃO DOS MIDDLEWARES ---
// Middleware é um software que fica "no meio" do caminho da requisição, podendo modificá-la ou executar código.

// 1. Middleware para processar dados de formulário:
// express.urlencoded({ extended: true }) é um middleware nativo do Express.
// Ele analisa as requisições recebidas com o content-type 'application/x-www-form-urlencoded' (padrão para formulários HTML).
// Os dados do formulário ficam disponíveis no objeto 'req.body'.
app.use(express.urlencoded({ extended: true }));

// 2. Middleware para servir arquivos estáticos:
// express.static('public') serve arquivos estáticos (como CSS, JavaScript do lado do cliente, imagens)
// diretamente do diretório 'public'. Qualquer arquivo nesse diretório pode ser acessado publicamente pela URL.
app.use(express.static('public'));

// --- CONFIGURAÇÃO DA VIEW ENGINE ---

// 1. Define o 'motor de visualização' (view engine) como 'ejs'.
// Isso diz ao Express para usar o EJS para renderizar templates HTML dinâmicos.
app.set('view engine', 'ejs');

// 2. Define o diretório onde os arquivos de view (templates) estão localizados.
// path.join(__dirname, 'views') cria um caminho absoluto para a pasta 'views',
// garantindo que funcione corretamente em qualquer sistema operacional, independentemente de onde o projeto for executado.
// '__dirname' é uma variável global do Node.js que contém o caminho do diretório do arquivo atual.
app.set('views', path.join(__dirname, 'views'));

// --- ROTAS DA APLICAÇÃO ---

// Diz ao aplicativo para usar as rotas definidas em 'taskRoutes' sempre que uma requisição começar com '/tasks'.
// Isso significa que uma rota 'GET /' dentro de 'taskRoutes.js' se tornará 'GET /tasks' na aplicação final.
// Uma rota 'POST /:id/delete' se tornará 'POST /tasks/:id/delete', e assim por diante.
app.use('/tasks', taskRoutes);

// Exporta o objeto 'app' configurado.
// Isso é útil para testes ou para separar a criação do servidor (app.listen) da definição do aplicativo.
module.exports = app;
