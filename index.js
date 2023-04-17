import express from 'express';
import router from './route/router.js';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import { createTableUsuarios } from './controller/usuarios.js';
import { createTableTodo } from './controller/tarefas.js';
import cors from 'cros';
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const swaggerDocument = yaml.load('./openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
createTableUsuarios();
createTableTodo();

app.use('/', router);

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
