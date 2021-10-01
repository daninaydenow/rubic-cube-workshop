const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('views', path.resolve('./src/views'));
app.set('view engine', '.hbs')

app.all('/', (req, res) => {
    res.render('index', {layout: false});
});

app.listen(5000, () => console.log(`Application is running on http://localhost:5000`));
