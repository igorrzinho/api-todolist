import express from 'express';
import router from './route/router.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { createTableUsuarios } from './controller/usuarios.js';
import { createTableTodo } from './controller/tarefas.js';
const app = express();
const port = 3000;
app.use(express.json());

createTableUsuarios();
createTableTodo();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Minha API',
      description: 'Descrição da minha API',
      contact: {
        name: 'igor'
      },
      servers: [`http://localhost:${port}`]
    }
  },
  apis: ['./route/*.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/', router);

app.listen(port, () => {
  console.log(`rodando em: http://localhost:${port}`);
});
