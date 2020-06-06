import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();
//usando cors (permitindo tudo pois estamos desenvolvendo)
app.use(cors());
//fazendo o express entender json
app.use(express.json());
//usando as rotas
app.use(routes);

//rota para pegar as imagens
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);