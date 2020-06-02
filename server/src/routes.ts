import express from 'express';

//usando o router conseguimos usar as rotas sem problemas
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: "hello world" });
});

export default routes;