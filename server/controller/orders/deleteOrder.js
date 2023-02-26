'use strict';
import { Order } from '../../models/index.js';

const deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.deleteOne({ _id: id });
  res.send(order);
};

export default deleteOrder;
