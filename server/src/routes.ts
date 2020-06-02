import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
// Criação de rota (recurso completo da requisição)
// O /users é o recurso/entidade que estamos acessando
// Usamos os query params para filtrar informações, geralmente opcionais.
// Request body: parâmetros para criação e atualização de informações


//usando o router conseguimos usar as rotas sem problemas
const routes = express.Router();

//instância dos controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

//listando itens
routes.get('/items', itemsController.index);

//rota para inserir ponto de coleta
routes.post('/points', pointsController.create);

//rota para mostrar pontos com filtro
routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);
export default routes;