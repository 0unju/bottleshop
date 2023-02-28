'use strict';
import { Order } from '../../models/index.js';

const postOrder = async (req, res, next) => {
  const { user_id, guest_id, product_id, w_count, c_count } = req.body;
  try {
    const orderInfo = await Order.create({
      user_id,
      guest_id,
      product_id,
      w_count,
      c_count,
    });

    // populate product_id
    const result = await Order.findOne({ _id: orderInfo._id })
      .populate('product_id', 'wine_type price')
      .populate('user_id', 'username')
      .exec();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

export default postOrder;
