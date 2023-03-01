'use strict';
import { Order } from '../../models/index.js';

const deleteOrder = async (req, res, next) => {
  const { id } = req.params; // order_id
  console.log(req.query.select); // product_id

  if (!req.query.select) {
    const order = await Order.deleteOne({ _id: id });
    res.send(order);
  } else {
    const order = await Order.updateOne(
      { _id: id },
      { $pull: { product_id: req.query.select } }
    );
    res.send(order);
  }
};

export default deleteOrder;
