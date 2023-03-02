'use strict';
import { Order } from '../../models/index.js';

const updateOrder = async (req, res, next) => {
  const { product_id } = req.body;

  try {
    await Order.updateOne(
      { _id: id },
      {
        product_id,
        count,
      }
    );
    res.send("주문 정보가 수정되었습니다.");

  } catch (err) {
    next(err);
  }
};

export default updateOrder;