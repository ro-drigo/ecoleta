import express from 'express';

const app = express();

//Criação de rota
app.get('/users', (request, response) => {
    console.log("Listagem de usuários");

    response.json([
        "Hello",
        "World",
        "Rodrigo"
    ]);
});

app.listen(3333);