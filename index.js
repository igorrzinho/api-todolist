import express from 'express';
import router from './route/router.js';
import { createTableUsuarios } from './controller/usuarios.js';
import { createTableTodo } from './controller/tarefas.js';
const app = express();
const port = 3000;
app.use(express.json());

createTableUsuarios();
createTableTodo();

app.use('/', router);

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
