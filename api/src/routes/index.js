const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productRouter = require('./product.js');
<<<<<<< HEAD
const categoryRouter = require('./Category.js');
=======
const categoryRouter = require('./category.js');
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95



const router = Router();


// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
<<<<<<< HEAD
=======

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95

module.exports = router;
