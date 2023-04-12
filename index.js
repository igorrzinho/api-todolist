import express from 'express';
import router from './route/router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import { createTableUsuarios } from './controller/usuarios.js';
import { createTableTodo } from './controller/tarefas.js';
const app = express();
const port = 3000;
app.use(express.json());

createTableUsuarios();
createTableTodo();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Descrição da minha API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./route/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', router);

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
