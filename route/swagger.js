/**
 * @swagger
 * tags:
 *   name: Exemplo
 *   description: Exemplos de endpoints da API
 */

/**
 * @swagger
 * /api/exemplo:
 *   post:
 *     summary: Envia uma saudação para o usuário
 *     tags: [Exemplo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: João
 *     responses:
 *       200:
 *         description: Saudação enviada com sucesso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Olá, João!
 *       400:
 *         description: Nome não fornecido
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: O campo 'nome' é obrigatório
 */
/**
 * @swagger
 * /adduser:
 *  post:
 *    description: adiciona um usuario
 *    body:
 *      - name: ola
 *        description: ID do usuário
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 */
/**
 * @swagger
 * /:
 *   get:
 *     summary: Exibe a mensagem "Olá, mundo!".
 *     description: Exibe a mensagem "Olá, mundo!".
 *     responses:
 *       200:
 *         description: A mensagem "Olá, mundo!" é exibida.
 */