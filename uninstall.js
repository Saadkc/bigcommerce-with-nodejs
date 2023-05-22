const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');
const bigCommerce = new BigCommerce({
secret: '272d5c04c382730b7f05673ded3110ed73c1fe289d5f7bd4a92aea3430657e72',
responseType: 'json'
});

router.get('/uninstall', (req, next) => {
try {
const data = bigCommerce.verify(req.query['signed_payload']);
console.log(data);
} catch (err) {
next(err);
}
});

module.exports = router;