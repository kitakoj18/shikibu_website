const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.getHome);

router.get('/menu', mainController.getMenu);

router.get('/lunch-menu', mainController.getLunchMenu);

router.get('/specials', mainController.getSpecialsMenu);

router.get('/gallery', mainController.getGallery);

router.get('/about', mainController.getAbout);

router.get('/contact', mainController.getContact)

module.exports = router