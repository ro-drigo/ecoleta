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
            id: item.id,
            title: item.title,
            image_url: `http://localhost.com:3333/uploads/${item.image}`,
        }; 
    });

    return response.json(serializedItems);
});

//rota para inserir ponto de coleta
routes.post('/points', async (request,response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    //fazendo com que um insert só funcione se o outro funcionar também
    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    })

    const point_id = insertedIds[0];

    //relacionamento com a tabela items
    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id
        };
    })
    //relacionamento com a tabela items
    await trx('point_items').insert(pointItems);

    return response.json({ success: true });
});

export default routes;