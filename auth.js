const express = require('express'),
    router = express.Router(),
    BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    clientId: '4xmjmcev8vp3hz40un0jes76cdursnb',
    secret: '272d5c04c382730b7f05673ded3110ed73c1fe289d5f7bd4a92aea3430657e72',
    callback: 'https://e572-116-90-109-33.ngrok-free.app/api/oauth',
    responseType: 'json'
});

router.get('/oauth', (req, res, next) => {
    bigCommerce.authorize(req.query)
        .then(data => res.render('auth', { title: 'Authorized!' }));
});

module.exports = router;