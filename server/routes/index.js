'use strict';
import express from 'express';
const router = express.Router();

import usersRouter from './users.js';
import productsRouter from './products.js';
import ordersRouter from './orders.js';
import shipmentsRouter from './shipments.js';
import postsRouter from './posts.js';

router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/shipments', shipmentsRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// upload picture

export default router;
