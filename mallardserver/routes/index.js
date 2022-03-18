var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const cors = require('cors');
app.use(cors({
    origin: 'http://dev.mallardandclaret.org'
}));

module.exports = router;
