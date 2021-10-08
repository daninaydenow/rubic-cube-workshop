const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const config = require('./config/config.json')[process.env.NODE_ENV];
const routes = require('./routes');
const initDataBase = require('./config/database');
const {auth} = require('./middlewares/atuhMiddleware');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cookieParser({}));
app.use(auth);
// rendering engine
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

initDataBase(config.DB_CONNECTION_STRING)
.then(() => {
    app.listen(config.PORT, () => console.log(`Application is running on http://localhost:${config.PORT}`));
})
.catch(err => {
    console.log('Application failed: ', err);
})


