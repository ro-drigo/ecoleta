import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
// Criação de rota (recurso completo da requisição)
// O /users é o recurso/entidade que estamos acessando
// Usamos os query params para filtrar informações, geralmente opcionais.
// Request body: parâmetros para criação e atualização de informações
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

//usando o router conseguimos usar as rotas sem problemas
const routes = express.Router();
const upload = multer(multerConfig);

//instância dos controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

//listando itens
routes.get('/items', itemsController.index);

//rota para mostrar pontos com filtro
routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

//rota para inserir ponto de coleta com imagem usando multer
routes.post(
    '/points',
    upload.single('image'),
    //validação de entrada de dados
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
          })
        }, {
          abortEarly: false
        }),
        pointsController.create
    );


export default routes;