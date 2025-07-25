// Inicializa um array vazio que servirá como nosso "banco de dados" em memória para armazenar as tarefas.
// 'let' é usado para que possamos reatribuir o array (como no método delete).
let tasks = [];

// Exporta um objeto que contém todos os métodos para manipular o array de tarefas.
// Este objeto atua como o "Model", a camada de dados da aplicação.
module.exports = {
    /**
     * @description Retorna todas as tarefas.
     * @returns {Array} O array completo de tarefas.
     */
    getAll() {
        return tasks;
    },

    /**
     * @description Busca e retorna uma única tarefa pelo seu ID.
     * @param {string} id - O ID da tarefa a ser encontrada.
     * @returns {object | undefined} O objeto da tarefa se encontrado, ou undefined se não.
     */
    getById(id) {
        // Usa o método 'find' do array para retornar o primeiro elemento que satisfaz a condição.
        return tasks.find(task => task.id === id);
    },

    /**
     * @description Adiciona uma nova tarefa ao início do array.
     * @param {object} task - O objeto da nova tarefa a ser criada.
     */
    create(task) {
        // 'unshift' adiciona o novo item no começo do array, fazendo com que as tarefas mais recentes apareçam primeiro.
        tasks.unshift(task);
    },

    /**
     * @description Alterna o status de uma tarefa entre 'pendente' e 'concluida'.
     * @param {string} id - O ID da tarefa cujo status será alterado.
     */
    toggleStatus(id) {
        // Primeiro, encontra a tarefa no array pelo ID.
        const task = tasks.find(task => task.id === id);
        // Se a tarefa for encontrada (se 'task' não for null ou undefined)...
        if (task) {
            // ...usa um operador ternário para inverter o status.
            // Se o status atual for 'concluida', muda para 'pendente'. Caso contrário, muda para 'concluida'.
            task.status = task.status === 'concluida' ? 'pendente' : 'concluida';
        }
    },

    /**
     * @description Remove uma tarefa do array com base no seu ID.
     * @param {string} id - O ID da tarefa a ser removida.
     */
    delete(id) {
        // 'filter' cria um novo array com todos os elementos que passam no teste.
        // Aqui, ele cria um novo array contendo todas as tarefas, exceto aquela com o ID correspondente.
        // A variável 'tasks' original é então substituída por este novo array.
        tasks = tasks.filter(task => task.id !== id);
    },

    /**
     * @description Atualiza o título e a descrição de uma tarefa existente.
     * @param {string} id - O ID da tarefa a ser atualizada.
     * @param {object} newData - Um objeto contendo os novos dados (ex: { title, description }).
     */
    update(id, newData) {
        // Encontra a tarefa que precisa ser atualizada.
        const task = tasks.find(task => task.id === id);

        // Verifica se a tarefa foi realmente encontrada antes de tentar atualizá-la.
        if (task) {
            // Atualiza o título e a descrição da tarefa com os novos dados.
            task.title = newData.title;
            task.description = newData.description;
            // Opcional: Define o status como 'pendente' ao editar, assumindo que uma tarefa editada precisa ser revisada.
            task.status = 'pendente';
        }
    }
};
