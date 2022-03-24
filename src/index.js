const path = require('path');
const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;
// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource/views'))
//route
app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/plus', (req, res) => {
  res.render('plus');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})