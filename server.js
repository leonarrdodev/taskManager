// Importa o objeto 'app' que foi configurado e exportado do arquivo app.js.
// 'app' contém todas as configurações do Express, middlewares e rotas.
const app = require("./app");

// Define a porta em que o servidor irá escutar por requisições.
// process.env.PORT é uma variável de ambiente. Em ambientes de produção (como Heroku, Vercel, etc.),
// a porta é geralmente fornecida dinamicamente através dessa variável.
// Se process.env.PORT não estiver definida (ou seja, estamos rodando localmente),
// o valor padrão 3000 será usado.
const PORT = process.env.PORT || 3000;

// Inicia o servidor. O método app.listen() "liga" o servidor na porta especificada.
// Ele fica aguardando por conexões HTTP de entrada.
// O segundo argumento é uma função de callback que é executada assim que o servidor é iniciado com sucesso.
// Neste caso, ele exibe uma mensagem no console, informando o endereço em que o servidor está acessível.
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
