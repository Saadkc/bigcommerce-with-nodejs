const express = require('express');
router = express.Router();
const axios = require('axios');

router.get('/checkout.js', async (req, res) => {

    console.log("saad");
    const dummy = {
        'wholesaler': [
            'Cod',
            'bank_deposit'
        ],
        'retailer': [
            'Cod',
        ]
    }

    const redirectURL = `https://bigcommerceapp.web.app`;
    res.redirect(redirectURL);

});


router.post('/cart', (req, res) => {
    console.log(req.body);
    res.status(200).json({ "status": "success" });
});


module.exports = router;

