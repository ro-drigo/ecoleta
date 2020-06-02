import knex from 'knex';
//usamos a lib path para ajudar na indicação de caminhos de pastas e arquivos
//ele pode ajudar muito, já que ele formata para o nosso sistema operacional
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;