const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);

// require('./config/handlebars')(app);
app.use(express.static(path.resolve(__dirname, './public')));

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, () => console.log(`Application is running on http://localhost:5000`));
