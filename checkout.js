const express = require('express');
router = express.Router();
const axios = require('axios');

router.get('/checkout.js', async (req, res) => {

    console.log('checkout.js called');
    const dummy = {
        'wholesaler': [
            'Cod',
            'bank_deposit'
        ],
        'retailer': [
            'Cod',
        ]
    }

    const dummyString = JSON.stringify(dummy);

    const redirectURL = `https://bigcommerceapp.web.app/?dummy=${encodeURIComponent(dummyString)}`;

    res.redirect(redirectURL);

});

router.post('/cart', (req, res) => {
    console.log(req.body);
    res.status(200).json({ "status": "success" });
});


module.exports = router;