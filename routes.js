const express = require('express');
const router = express.Router();

// routes here
router.get('/', async(req,res) => {
    res.send({
        'status': true,
    })
})

// routes here
router.post('/products', async(req,res) => {
    const products = req.body;

    for(let i = 0; i < products.length; i++) {

        // do any thing here for products
    }
    res.send({
        'status': true,
        'products': products,
    })
})


module.exports = router;