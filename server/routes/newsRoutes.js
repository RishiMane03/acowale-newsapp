const express = require('express');
const axios = require('axios');
const { getAllNews, getNewsCategory } = require('../controllers/newsController');
const router = express.Router();


router.get('/getAllNews', getAllNews)
router.post('/getNewsCategory', getNewsCategory)

module.exports = router;
