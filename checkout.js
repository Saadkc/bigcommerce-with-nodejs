const { createCheckoutService } = require('@bigcommerce/checkout-sdk');
const express = require('express');
router = express.Router();
// import { getLanguageService } from './getLanguageService';

router.get('/checkout.js', async (req, res) => {
    // const service = createCheckoutService({
    //     locale: getLanguageService().getLocale(),
    //     shouldWarnMutation: process.env.NODE_ENV === 'development',
    // });
    // const service = createCheckoutService();
    // const checkoutId = '0cfd6c06-57c3-4e29-8d7a-de55cc8a9052';
    // const state = await service.loadCheckout(checkoutId);

    // console.log(state.data.getCheckout());
    // console.log(state.data.getCart());
    // console.log(state.data.getBillingAddress());
    // console.log(state.data.getShippingAddress());
    
    res.status(200).json({ 'wholesaler': ['cod', 'bank-deposit'], 'retailer': ['cod'] })

    // console.log("working")
    // const checkoutId = '0cfd6c06-57c3-4e29-8d7a-de55cc8a9052';
    // const state = await service.loadCheckout(checkoutId);

    // console.log(state.data.getCheckout());
    // console.log(state.data.getCart());
    // console.log(state.data.getBillingAddress());
    // console.log(state.data.getShippingAddress());
    // console.log(state.data.getConfig());

    // const state1 = await service.signInCustomer({ email: 'saad.technopreneurs@gmail.com', password: 'Techno@123' });

    // console.log(state.data.getCustomer());

    // await service.executeSpamCheck();
    // res.render('welcome', { title: 'Welcome' });

});

module.exports = router;