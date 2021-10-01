const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');
const routes = require('./routes');


const app = express();
app.use(express.urlencoded({extended: true}));
initHandlebars(app);

// require('./config/handlebars')(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);



app.listen(5000, () => console.log(`Application is running on http://localhost:5000`));
