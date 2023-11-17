import express from "express";

import { userLogin, userSignUp } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js";
import { addPaymentGetway } from "../controller/paymeny-contoller.js";

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGetway);

export default router;