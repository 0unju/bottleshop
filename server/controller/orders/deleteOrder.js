'use strict';
import { Order } from '../../models/index.js';

const deleteOrder = async (req, res, next) => {
  const { _id } = req.params;
  const order = await Order.deleteOne({ _id });
  res.send(order);
};

export default deleteOrder;
