'use strict';
import { Order } from '../../models/index.js';

const updateOrder = async (req, res, next) => {
  const { _id } = req.params;
  const { product_id, w_count, c_count } = req.body;

  try {
    const order = await Order.updateOne(
      {
        _id,
      },
      {
        product_id,
        w_count,
        c_count,
      }
    );
    res.json(order);
    console.log(order);
  } catch (err) {
    console.log(err.message);
  }
};

export default updateOrder;
