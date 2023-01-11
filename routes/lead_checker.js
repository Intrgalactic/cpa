const express = require('express');
const fetch = require('../middleware/fetchLead.js');
const router = express.Router();

router.get('/',fetch.fetch_lead);

module.exports = router;
