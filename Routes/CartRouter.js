const express = require('express');
const cartcontroller = require('../Controllers/Cartcontroller');
const auth = require('../Middlewares/Auth');
const router = express.Router();
router.post('/', auth, cartcontroller.createcart);
router.get('/',auth,cartcontroller.getcart);
router.delete('/:product_id',auth,cartcontroller.deletecart);
module.exports = router;