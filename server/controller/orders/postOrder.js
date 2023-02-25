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
      .where('type')
      .equals('wine')
      .populate('product_id', 'type price')
      .exec();

    console.log('saved in database');
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
};

export default postOrder;
