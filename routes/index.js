/*
    File name: COMP308-W2019-Assignment01
    Author's name: Semy Jin
    Student ID: 300910535
    Web app name: Express Portfolio
    Github repository link: https://github.com/sjtype/COMP308-W2019-Assignment01-300910535
    Heroku link: https://comp308-w2019-a1-300910535.herokuapp.com/
  */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
