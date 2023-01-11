const express = require('express');
const fetch = require('../middleware/fetchOffers.js');
const router = express.Router();

router.get('/',fetch.fetch_offers);

module.exports = router;
