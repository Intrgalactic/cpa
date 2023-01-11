const express = require('express');
const app = express();

app.set('views', './public');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const fetchOffersRouter = require('./routes/offers.js');
const fetchLeadRouter = require('./routes/lead_checker.js');

app.use('/offers', fetchOffersRouter);
app.use('/lead',fetchLeadRouter);

app.get('/', async (req, res) => {
    
    res.render('index.ejs');
})

app.listen(5000);
