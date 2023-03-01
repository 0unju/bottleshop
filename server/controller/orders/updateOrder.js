'use strict';
import { Order } from '../../models/index.js';

const updateOrder = async (req, res, next) => {
  const { product_id } = req.body;

  try {
    const order = await Order.updateOne(
      { _id: id },
      {
        product_id,
        count,
      }
    );
    res.json(order);

  } catch (err) {
    next(err);
  }
};

export default updateOrder;
