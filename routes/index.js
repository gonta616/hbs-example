var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const isShowTitle = req.query.showtitle;
  res.render('index', { 
    title: 'Express',
    author: { firstName: 'Gonjo', lastName: 'Kazuya' },
    members: [
      {name: 'member1', role: 'member'},
      {name: 'member2', role: 'member'},
      {name: 'member3', role: 'admin'},
    ],
    showTitle: isShowTitle
  });
});

module.exports = router;
