import {
  insertUser,
  deleteUser,
  updatePessoa,
  allUsers,
} from '../controller/usuarios.js';

import {
  insertTask,
  deleteTask,
  deleteAllTask,
  selectTask,
  allTasks,
} from '../controller/tarefas.js';
import { Router } from 'express';
import { randomUUID } from 'crypto';

const router = Router();
router.get('/', (req, res) => {
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
router.post('/adduser', async function (req, res) {
  let { email, senha, nomeUsuario } = req.body;
  var tolken = randomUUID();
  insertUser(email, senha, nomeUsuario, tolken);
  res.json('usuario adicionado');
});

router.put('/putuser/:id', async function (req, res) {
  let { id } = req.params;
  let { senha, nomeUsuario } = req.body;
  updatePessoa(nomeUsuario, senha, id);
  res.json('usuario alterado');
});

router.delete('/delete/:id', async function (req, res) {
  let { id } = req.params;
  deleteUser(id);
  deleteAllTask(id);
  res.json('usuario deletado');
});

router.get('/allusers', async function (req, res) {
  let users = await allUsers();
  res.json(users);
});

//task----------------------------------------------------------------------------------------------------------------------------------------------------//
router.post('/addtask/:id', async function (req, res) {
  let id = req.params.id;
  let task = req.body.task;
  insertTask(task, id);
  res.json('tarefa adicionada: ' + task);
});

router.get('/selecttask/:id', async function (req, res) {
  let id = req.params.id;
  let tasks = await selectTask(id);
  res.json(tasks);
});

router.delete('/deletetask/:id', async function (req, res) {
  let id = req.params.id;
  deleteTask(id);
  res.json('tarefa deletada de id ' + id);
});

router.get('/alltasks', async function (req, res) {
  let tasks = await allTasks();
  res.json(tasks);
});

export default router;
