const express = require('express');
const axios = require('axios');
const { getAllNews, getNewsCategory, getSearchNews } = require('../controllers/newsController');
const router = express.Router();


router.get('/getAllNews', getAllNews)
router.post('/getNewsCategory', getNewsCategory)
router.post('/getSearchNews', getSearchNews)

module.exports = router;
