const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');



const router = Router();


// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
<<<<<<< HEAD
=======

>>>>>>> fe7f195793b502a4a808c47f9c5eb898f46bf16e

module.exports = router;
