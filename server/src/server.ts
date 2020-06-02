import express from 'express';
import routes from './routes';

const app = express();

//fazendo o express entender json
app.use(express.json());

app.use(routes);
// Criação de rota (recurso completo da requisição)
// O /users é o recurso/entidade que estamos acessando
// Usamos os query params para filtrar informações, geralmente opcionais.
// Request body: parâmetros para criação e atualização de informações


app.listen(3333);