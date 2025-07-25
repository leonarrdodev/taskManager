// Importa o "Model" de Tarefas. O Model é a camada responsável
// por interagir diretamente com os dados (seja um banco de dados, um arquivo JSON ou, como neste caso, um array em memória).
// Ele contém funções como getAll, create, delete, etc.
const Task = require('../models/tasksModel');

// Exporta um objeto que contém todos os métodos do controller.
// Esses métodos são as funções que serão executadas quando uma determinada rota for acessada.
module.exports = {

    /**
     * @description Renderiza a página principal com a lista de todas as tarefas.
     * @param {object} req - O objeto de requisição (request), contém informações sobre a solicitação HTTP.
     * @param {object} res - O objeto de resposta (response), usado para enviar uma resposta de volta ao cliente.
     */
    index(req, res) {
        // res.render() é usado para renderizar um arquivo de template (view).
        // O primeiro argumento 'index' é o nome do arquivo de view (ex: index.ejs).
        // O segundo argumento é um objeto com os dados que serão passados para a view.
        // Aqui, estamos passando um objeto com a chave 'tasks' e o valor retornado por Task.getAll().
        res.render('index', { tasks: Task.getAll() });
    },

    /**
     * @description Cria uma nova tarefa com base nos dados enviados pelo formulário.
     * @param {object} req - O objeto de requisição. req.body contém os dados do formulário (title, description).
     * @param {object} res - O objeto de resposta.
     */
    create(req, res) {
        // Desestruturação para extrair 'title' e 'description' do corpo da requisição (req.body).
        const { title, description } = req.body;

        // Cria um novo objeto de tarefa com os dados recebidos.
        const newTask = {
            // Gera um ID único para a tarefa usando o timestamp atual. Não é a melhor prática para produção, mas funciona para exemplos simples.
            id: Date.now().toString(),
            title, // title: title
            description, // description: description
            status: 'pendente' // Define o status inicial como 'pendente'.
        };

        // Chama o método 'create' do Model para salvar a nova tarefa.
        Task.create(newTask);

        // Redireciona o usuário de volta para a página principal ('/tasks' ou '/').
        // Isso faz com que o navegador faça uma nova requisição GET para a rota principal,
        // o que aciona o método 'index' novamente, renderizando a lista atualizada de tarefas.
        res.redirect('/tasks');
    },

    /**
     * @description Alterna o status de uma tarefa (de 'pendente' para 'concluida' e vice-versa).
     * @param {object} req - O objeto de requisição. req.params contém os parâmetros da rota (neste caso, o 'id' da tarefa).
     * @param {object} res - O objeto de resposta.
     */
    toggleStatus(req, res) {
        // Extrai o 'id' dos parâmetros da URL. Por exemplo, em uma rota '/tasks/123/toggle', req.params.id será '123'.
        const { id } = req.params;

        // Chama o método 'toggleStatus' do Model, passando o ID da tarefa a ser modificada.
        Task.toggleStatus(id);

        // Redireciona o usuário para a página principal para ver a mudança.
        res.redirect('/tasks');
    },

    /**
     * @description Remove uma tarefa específica.
     * @param {object} req - O objeto de requisição, contendo o 'id' da tarefa nos parâmetros da rota.
     * @param {object} res - O objeto de resposta.
     */
    remove(req, res) {
        // Extrai o 'id' dos parâmetros da URL.
        const { id } = req.params;

        // Chama o método 'delete' do Model para remover a tarefa correspondente ao ID.
        Task.delete(id);

        // Redireciona o usuário para a página principal.
        res.redirect('/tasks');
    },

    /**
     * @description Renderiza a página de edição de uma tarefa específica.
     * @param {object} req - O objeto de requisição, contendo o 'id' da tarefa nos parâmetros da rota.
     * @param {object} res - O objeto de resposta.
     */
    edit(req, res){
        // Extrai o 'id' dos parâmetros da URL.
        const { id } = req.params;

        // Busca a tarefa específica pelo seu ID utilizando o método 'getById' do Model.
        const task = Task.getById(id);

        // Renderiza a view 'edit' (ex: edit.ejs), passando os dados da tarefa encontrada.
        // A view usará esses dados para preencher o formulário de edição.
        res.render('edit', { task });
    },
    
    /**
     * @description Atualiza uma tarefa com as novas informações enviadas pelo formulário de edição.
     * @param {object} req - O objeto de requisição. Contém o 'id' nos parâmetros e os novos 'title' e 'description' no corpo.
     * @param {object} res - O objeto de resposta.
     */
    update(req, res){
        // Extrai o 'id' dos parâmetros da URL para saber qual tarefa atualizar.
        const { id } = req.params;
        
        // Extrai o novo 'title' e 'description' do corpo da requisição (dados do formulário).
        const { title, description } = req.body;

        // Chama o método 'update' do Model, passando o ID da tarefa e um objeto com os novos dados a serem atualizados.
        Task.update(id, { title, description });
        
        // Redireciona o usuário para a lista de tarefas, onde a tarefa atualizada será exibida.
        res.redirect('/tasks');
    }
};