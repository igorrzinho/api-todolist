import {
  insertUser,
  deleteUser,
  updatePessoa,
  allUsers,
  Login,
  Token,
  tokenValid,
} from "../controller/usuarios.js";

import {
  insertTask,
  deleteTask,
  deleteAllTask,
  selectTask,
  allTasks,
  updateTask,
} from "../controller/tarefas.js";
import { auth } from "./auth.js";
import { Router } from "express";
import { randomUUID } from "crypto";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    usuarios: {
      "adicionar usuario": "/adduser",
      body: {
        email: "string",
        senha: "password",
        nomeUsuario: "string",
      },
      "alterar um usuario": "/putuser/:nomeUsuario/:senha/:id",
      "deletar um usuario": "/delete/:id",
      "mostra todos os usuarios": "/allusers",
    },
    tasks: {
      "adiciona um nova task": "/addtask/:id",
      body: { task: "ola mundo" },
      "seleciona as task pelo id do usuario": "/selecttask/:id",
      "deleta uma task pelo id": "/deletetask/:id",
      "mostra todas as tasks": "/alltasks",
    },
  });
});

async function Authentication(req, res, next) {
  const token = req.headers["token"];
  if (!token) {
    return res.status(401).json({ mensagem: "Token não encontrado" });
  }

  let resToken = await tokenValid(token);

  // Aqui você pode verificar se o token é válido, por exemplo

  if (resToken.length < 1) {
    return res.status(401).json({ mensagem: "Token não é valido" });
  }

  // Se o token for inválido, você pode retornar um erro 401 (Não Autorizado)

  next();
}
//usuario----------------------------------------------------------------------------------------------------------------------------------------------------//

router.post("/adduser", async function (req, res) {
  let { email, senha, nomeUsuario } = req.body;
  insertUser(email, senha, nomeUsuario, randomUUID());
  let token = await Token(nomeUsuario, senha);
  console.log(token);
  res.json(token);
});

router.post("/login", async (req, res) => {
  const { nomeUsuario, senha } = req.body;
  let token = await Token(nomeUsuario, senha);
  let hasToken = auth(token);
  if (hasToken == true) {
    res.status(200).json(token);
  } else {
    res.status(401).send("nao autorizado");
  }
});

router.put("/putuser/:id", Authentication, async function (req, res) {
  let { id } = req.params;
  let { senha, nomeUsuario } = req.body;
  updatePessoa(nomeUsuario, senha, id);
  res.json("usuario alterado");
});

router.delete("/delete/:id", async function (req, res) {
  let { id } = req.params;
  deleteUser(id);
  deleteAllTask(id);
  res.json("usuario deletado");
});

router.get("/allusers", async function (req, res) {
  let users = await allUsers();
  res.json(users);
});

//task----------------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/addtask/:id", Authentication, async function (req, res) {
  let id = req.params.id;
  let task = req.body.task;
  insertTask(task, id);
  res.json("tarefa adicionada: " + task);
});

router.get("/selecttask/:id", Authentication, async function (req, res) {
  let id = req.params.id;
  let tasks = await selectTask(id);
  res.json(tasks);
});

router.delete("/deletetask/:id", Authentication, async function (req, res) {
  let id = req.params.id;
  deleteTask(id);
  res.json("tarefa deletada de id " + id);
});

router.put("/puttask/:id", async function (req, res) {
  let { complete } = req.body;
  let id = req.params.id;
  updateTask(complete, id);
  res.json("tarefa alterada de id " + id);
});

router.get("/alltasks", async function (req, res) {
  let tasks = await allTasks();
  res.json(tasks);
});

export default router;
