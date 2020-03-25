const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* Rota / Recurso */

/* Métodos HTTP
GET: Buscar uma informação do back-end
POST: Criar uma informação do back-end
PUT: Alterar uma informação do back-end
DELETE: Deletar uma informação do back-end */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmentros nomeados enviados na rota após *?* {Filtros,paginação}
 * Route Params: Parâmetros utilizados para identicar recursos
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
 */

 /**
  * SQL: MySQL,SQLite,PostgreSQL,Oracle,Microsoft SQL Server
  * NoSQL: MongoDB,CouchDB,etc
  */

  /**
   * Driver : SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3333);