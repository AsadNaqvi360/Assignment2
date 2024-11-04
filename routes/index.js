const express = require('express');
const router = express.Router();

// Route for Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Route for About Me page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Route for Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Route for Contact Me page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
