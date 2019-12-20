const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const engine = require('ejs-locals');
const compression = require('compression');
const minifyHTML = require('express-minify-html');
const favicon = require('serve-favicon');
const config = require('./config');

app.use(favicon(__dirname + '/favicon.png')); //here favicon change not working

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {

  req.active = req.path.split('/')[1];
  res.locals.storageHost = config.storageHost;
  res.locals.host = config.host;
  next();
});

// set the view engine to ejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
//
// app.use(minifyHTML({
//   override: true,
//   exception_url: false,
//   htmlMinifier: {
//     removeComments: true,
//     collapseWhitespace: true,
//     collapseBooleanAttributes: false,
//     removeAttributeQuotes: false,
//     removeEmptyAttributes: false,
//     minifyJS: true
//   }
// }));

app.use(compression());

const oneYear = 1 * 365 * 24 * 60 * 60 * 1000;

app.use(express.static(path.join(__dirname, '/dist/')));

router.use('/', require('./controllers/AppController'));

app.use('/', router);

app.set('view options', {layout: 'layout'});

module.exports = app;
