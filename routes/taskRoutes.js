// Importa o framework Express.
const express = require('express');
// Cria uma instância do Router do Express. O Router é como um "mini-aplicativo" Express,
// permitindo-nos agrupar rotas relacionadas em um único arquivo.
const router = express.Router();
// Importa o controller de tarefas, que contém a lógica para cada rota.
const tasksController = require('../controllers/taskController');


// --- DEFINIÇÃO DAS ROTAS ---

// Rota para a página inicial (ex: /tasks)
// Método: GET
// Ação: Quando um usuário acessa a raiz deste router, a função 'index' do controller é chamada para listar todas as tarefas.
router.get('/', tasksController.index);

// Rota para criar uma nova tarefa (ex: /tasks)
// Método: POST
// Ação: Quando um formulário é enviado para esta rota, a função 'create' do controller é chamada para processar os dados e criar a tarefa.
router.post('/', tasksController.create);

// Rota para exibir o formulário de edição de uma tarefa específica (ex: /tasks/123/edit)
// Método: GET
// ':id' é um parâmetro de rota dinâmico. O Express captura o valor (ex: '123') e o disponibiliza em req.params.id.
// Ação: Chama a função 'edit' do controller para buscar a tarefa e renderizar a página de edição.
router.get('/:id/edit', tasksController.edit);

// Rota para enviar os dados atualizados de uma tarefa (ex: /tasks/123/edit)
// Método: POST
// Ação: Quando o formulário de edição é enviado, a função 'update' do controller é chamada para salvar as alterações.
router.post('/:id/edit', tasksController.update);

// OBS: Esta rota é redundante, pois a rota acima ('/:id/edit') já executa a mesma função 'update'.
// Em uma aplicação real, você normalmente escolheria apenas uma delas para a ação de atualizar.
// Por exemplo, usando o método PUT ou PATCH em uma rota como '/:id'.
router.post('/:id/update', tasksController.update);

// Rota para alternar o status de uma tarefa (ex: /tasks/123/toggle)
// Método: POST
// Ação: Chama a função 'toggleStatus' do controller para mudar o status da tarefa (pendente/concluída).
router.post('/:id/toggle', tasksController.toggleStatus);

// Rota para deletar uma tarefa (ex: /tasks/123/delete)
// Método: POST
// Ação: Chama a função 'remove' do controller para excluir a tarefa.
router.post('/:id/delete', tasksController.remove);

// Exporta o objeto router com todas as rotas configuradas.
// Este router será então importado e usado no arquivo principal da sua aplicação (ex: app.js ou server.js).
module.exports = router;
