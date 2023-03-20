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
  deleteAllTask,
  selectTask,
  allTasks,
} from './controller/tarefas.js';
import express from 'express';
import { randomUUID } from 'crypto';
const app = express();
const port = 3000;
app.use(express.json());

createTableUsuarios();
createTableTodo();

app.get('/', (req, res) => {
  res.json({
    usuarios: {
      'adicionar usuario': '/adduser',
      body: {
        email: 'string',
        senha: 'password',
        nomeUsuario: 'string',
      },
      'alterar um usuario': '/putuser/:nomeUsuario/:senha/:id',
      'deletar um usuario': '/delete/:id',
      'mostra todos os usuarios': '/allusers',
    },
    tasks: {
      'adiciona um nova task': '/addtask/:id',
      body: { task: 'ola mundo' },
      'seleciona as task pelo id do usuario': '/selecttask/:id',
      'deleta uma task pelo id': '/deletetask/:id',
      'mostra todas as tasks': '/alltasks',
    },
  });
});

//usuario----------------------------------------------------------------------------------------------------------------------------------------------------//
app.post('/adduser', async function (req, res) {
  let { email, senha, nomeUsuario } = req.body;
  var tolken = randomUUID();
  insertUser(email, senha, nomeUsuario, tolken);
  res.json('usuario adicionado');
});

app.put('/putuser/:id', async function (req, res) {
  let { id } = req.params;
  let { senha, nomeUsuario } = req.body;
  updatePessoa(nomeUsuario, senha, id);
  res.json('usuario alterado');
});

app.delete('/delete/:id', async function (req, res) {
  let { id } = req.params;
  deleteUser(id);
  deleteAllTask(id);
  res.json('usuario deletado');
});

app.get('/allusers', async function (req, res) {
  let users = await allUsers();
  res.json(users);
});

//task----------------------------------------------------------------------------------------------------------------------------------------------------//
app.post('/addtask/:id', async function (req, res) {
  let id = req.params.id;
  let task = req.body.task;
  insertTask(task, id);
  res.json('tarefa adicionada: ' + task);
});

app.get('/selecttask/:id', async function (req, res) {
  let id = req.params.id;
  let tasks = await selectTask(id);
  res.json(tasks);
});

app.delete('/deletetask/:id', async function (req, res) {
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
