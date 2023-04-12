/**
 * @swagger
 * /login:
 *   post:
 *     summary: login
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
 *     summary: login
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
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensagem de resposta
 *           example: token do usuario
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
 *           description: Mensagem de resposta
 *           example: token do usuario
 */
