'use strict';
import { Order } from '../../models/index.js';

const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { product_id, w_count, c_count } = req.body;

  try {
    const order = await Order.updateOne(
      { _id: id },
      {
        product_id,
        w_count,
        c_count,
      }
    );
    res.json(order);

  } catch (err) {
    next(err);
  }
};

export default updateOrder;
