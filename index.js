import {
  createTableUsuarios,
  insertUser,
  deleteUser,
  updatePessoa,
  allUsers,
} from './controller/usuarios.js';

import {
  createTableTodo,
  insertTask,
  deleteTask,
  selectTask,
  allTasks,
} from './controller/tarefas.js';

import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());

createTableUsuarios();
createTableTodo();

app.get('/', (req, res) => {
  res.json({
    usuarios: {
      'adicionar usuario': '/adduser/:email/:senha/:nomeUsuario',
      'alterar um usuario': '/putuser/:nomeUsuario/:senha/:id',
      'deletar um usuario': '/delete/:id',
      'mostra todos os usuarios': '/allusers',
    },
    tasks: {
      'adiciona um nova task': '/addtask/:id/:task',
      'seleciona as task pelo id do usuario': '/selecttask/:id',
      'deleta uma task pelo id': '/deletetask/:id',
      'mostra todas as tasks': '/alltasks',
    },
  });
});

//usuario----------------------------------------------------------------------------------------------------------------------------------------------------//
app.get('/adduser/:email/:senha/:nomeUsuario', async function (req, res) {
  let { email, senha, nomeUsuario } = req.params;
  insertUser(email, senha, nomeUsuario);
  res.json('usuario adicionado');
});

app.get('/putuser/:nomeUsuario/:senha/:id', async function (req, res) {
  let { id, senha, nomeUsuario } = req.params;
  updatePessoa(nomeUsuario, senha, id);
  res.json('usuario alterado');
});

app.get('/delete/:id', async function (req, res) {
  let { id } = req.params;
  deleteUser(id);
  res.json('usuario deletado');
});

app.get('/allusers', async function (req, res) {
  let users = await allUsers();
  res.json(users);
});

//task----------------------------------------------------------------------------------------------------------------------------------------------------//
app.get('/addtask/:id/:task', async function (req, res) {
  let id = req.params.id;
  let task = req.params.task;
  insertTask(task, id);
  res.json('tarefa adicionada');
});

app.get('/selecttask/:id', async function (req, res) {
  let id = req.params.id;
  let tasks = await selectTask(id);
  res.json(tasks);
});

app.get('/deletetask/:id', async function (req, res) {
  let id = req.params.id;
  deleteTask(id);
  res.json('tarefa deletada de id ' + id);
});

app.get('/alltasks', async function (req, res) {
  let tasks = await allTasks();
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
