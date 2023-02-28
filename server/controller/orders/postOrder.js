'use strict';
import { Order } from '../../models/index.js';

const postOrder = async (req, res, next) => {
  const { user_id, guest_id, product_id, count } = req.body;
  try {
    // calculate #count
    const cal = product_id.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, {});

    const orderInfo = await Order.create({
      user_id,
      guest_id,
      product_id,
      count: cal,
    });

    // populate product_id
    const result = await Order.findOne({ _id: orderInfo._id })
      .populate('product_id', 'wine_type price')
      .populate('user_id', 'username')
      .exec();

    console.log('saved in database');

    res.send(result);
  } catch (err) {
    res.status(400);
    console.log(err.message);
  }
};

export default postOrder;
