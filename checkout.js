// const { createCheckoutService } = require('@bigcommerce/checkout-sdk');
const express = require('express');
router = express.Router();
const axios = require('axios');
// import { getLanguageService } from './getLanguageService';

router.get('/checkout.js', async (req, res) => {

    const options = { method: 'GET', headers: { 'Content-Type': 'application/json' , 'X-Auth-Token': 'bj7tkzjewifqq3spjpbo6y4b9t1p95b' , 'X-Auth-Client': 'bj7tkzjewifqq3spjpbo6y4b9t1p95b' } };

    await axios.get('https://api.bigcommerce.com/stores/qiasafvdob/v3/catalog/products', options)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.error(err));


});

// res.redirect('https://dkrmentor.github.io/dummycheckout/');
module.exports = router;