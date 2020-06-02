import express from 'express';

const app = express();

app.use(express.json());

const users = [
    "Hello",
    "World",
    "Rodrigo"
];

//Criação de rota (recurso completo da requisição)
//O /users é o recurso/entidade que estamos acessando
// Usamos os query params para filtrar informações, geralmente opcionais.
//Request body: parâmetros para criação e atualização de informações

app.get('/users/:id', (request, response) => {
    //colocamos o Number para converter o id de string pra número
    //o request params é um parâmetro que vem da roda para identificar um recurso
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.get('/users', (request, response) => {
    //pegando qual o query da requisição
    const search = String(request.query.search);

    //filtrando o usuário
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.post('/users', (request, response) => {
    const data = request.body;
    
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);