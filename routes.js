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

    res.send({
        'status': true,
        'products': products,
    })
})


module.exports = router;