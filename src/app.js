const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/handleError');
const port = 3000;

const db = require('./database');
const app = express();


db.hasConection();
app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));