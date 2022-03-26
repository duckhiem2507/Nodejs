const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');//2
const app = express();
const port = 3000;
const db = require('./config/db')//1
//1 connect db
db.connect();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// get img and css in folder public
app.use(express.static(path.join(__dirname, 'public')));
// template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(morgan('combined'));
//2 route
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
