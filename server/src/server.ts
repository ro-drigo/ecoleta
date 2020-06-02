import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

//fazendo o express entender json
app.use(express.json());
//usando as rotas
app.use(routes);

//rota para pegar as imagens
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);