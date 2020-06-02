import express from 'express';
import knex from './database/connection';
// Criação de rota (recurso completo da requisição)
// O /users é o recurso/entidade que estamos acessando
// Usamos os query params para filtrar informações, geralmente opcionais.
// Request body: parâmetros para criação e atualização de informações




//usando o router conseguimos usar as rotas sem problemas
const routes = express.Router();

//listando itens
routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    //deixar mais acessível ao front
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost.com:3333/uploads/${item.image}`,
        }; 
    });

    return response.json(serializedItems);
});

export default routes;