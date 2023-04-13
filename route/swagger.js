/**
 * @swagger
 * /allusers:
 *   get:
 *     summary: Descrição do endpoint
 *     responses:
 *       200:
 *         description: Descrição da resposta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de resposta
 *                   example: Olá, mundo!
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: faz login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Descrição da resposta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resLogin'
 */
/**
 * @swagger
 * /adduser:
 *   post:
 *     summary: adiciona um usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/adduser'
 *     responses:
 *       200:
 *         description: Descrição da resposta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resAdduser'
 */
/**
 * @swagger
 * /putuser/{id}:
 *   put:
 *     summary: altera um usuario
 *     parameters:
 *       - name: id
 *         description: ID do usuário
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Putuser'
 *     responses:
 *       200:
 *         description: Descrição da resposta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/resPutuser'
 */
/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *    description: Retorna um usuário específico
 *    parameters:
 *      - name: id
 *        description: ID do usuário
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: usuario deletado
 */
//components-----------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         nomeUsuario:
 *           type: string
 *           description: Nome do usuário
 *           example: igorrr
 *         senha:
 *           type: string
 *           description: senha do usuário
 *           example: 1234
 *     resLogin:
 *       type: string
 *
 *     adduser:
 *       type: object
 *       properties:
 *         nomeUsuario:
 *           type: string
 *           description: Nome do usuário
 *           example: seu nickname
 *         email:
 *           type: string
 *           description: email do usuário
 *           example: "nomedousuario@email.com"
 *         senha:
 *           type: string
 *           description: senha do usuário
 *           example: 1234
 *     resAdduser:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: tem que retornar "usuario adicionado"
 *           example: usuario adicionado
 *
 *     Putuser:
 *       type: object
 *       properties:
 *         nomeUsuario:
 *           type: string
 *           description: novo nome do usuário
 *           example: igorrr
 *         senha:
 *           type: string
 *           description: nova senha do usuário
 *           example: 1234
 *     resPutuser:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: tem que retornar "usuario alterado"
 *                   example: usuario alterado
 *
 */
