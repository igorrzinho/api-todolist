import express from 'express';
import router from './route/router.js';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import { createTableUsuarios } from './controller/usuarios.js';
import { createTableTodo, dropTable } from './controller/tarefas.js';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const swaggerDocument = yaml.load('./openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
createTableUsuarios();
createTableTodo();
dropTable();
app.use('/', router);

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
