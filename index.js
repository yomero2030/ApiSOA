const express = require('express');

const database = require('./models/index');

const app = express();


const PORT = 4000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require('./routers/index'));


app.listen(PORT, () => {
    console.log('SERVER IN THE PORT: ' + PORT);

    database.sequelize.authenticate().then(() => {
        console.log('Connected in data base');
    });
});