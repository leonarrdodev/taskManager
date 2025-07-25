# Task Manager - Gerenciador de Tarefas de Equipe

Um sistema simples de gerenciamento de tarefas desenvolvido com Node.js, Express, EJS e Tailwind CSS, seguindo a arquitetura MVC. O sistema permite adicionar, listar, concluir/reabrir e excluir tarefas. Interface responsiva com layout em duas colunas e tema escuro.

## Funcionalidades

- Criar Tarefas: Adicione novas tarefas com título e descrição através de um formulário simples.

- Listar Tarefas: Visualize todas as tarefas cadastradas em uma lista organizada.

- Atualizar Tarefas: Edite o título e a descrição de tarefas existentes.

- Marcar como Concluída/Pendente: Alterne o status de uma tarefa com um único clique.

- Excluir Tarefas: Remova tarefas que não são mais necessárias.

- Layout Responsivo: Interface amigável que se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## Arquitetura MVC

- **Model:** Lida com os dados (array de tarefas em memória)
- **Controller:** Manipula requisições e lógica de negócio
- **View:** Renderiza o HTML com EJS
- **Routes:** Define os caminhos da aplicação


## Estrutura de Pastas
```bash
task-manager
├── 📁 controllers
│ └── taskController.js
├── 📁 models
│ └── tasksModel.js
├── 📁 public
│ └── (arquivos estáticos, se necessário)
├── 📁 routes
│ └── taskRoutes.js
├── 📁 views
│ └── index.ejs
├── app.js
├── server.js
├── package.json
```


## Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
```
### 2. Instale as dependências
```bash
npm run dev
```
O servidor irá rodar em: http://localhost:3000/tasks

#### Tecnologias utilizadas
- Node.js

- Express

- EJS

- Tailwind CSS

- Nodemon (para desenvolvimento)

Leonardo  
Estudante de Análise e Desenvolvimento de Sistemas  
linkedin.com/in/leonarrdo-silva-de-oliveira