var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

const helmet = require('helmet');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const options = require('./knexfile.js');
const knex = require('knex')(options);

app.use((req, res, next) => {
    req.db = knex
    next()
})

app.get('/knex', function (req,res,next) {
    req.db.raw("SELECT VERSION()").then(
        (version) => console.log((version[0][0]))
    ).catch((err) => { console.log(err); throw err })
    res.send("Version Logged successfully");
})

app.use(logger('common'));
app.use(helmet());
app.use(cors());

app.use('/', routes);
app.use('/user', users);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(5000);

module.exports = app;