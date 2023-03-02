'use strict';
import { Shipment } from '../../models/index.js';

const postShipment = async (req, res, next) => {
  try {
    const {
      order_id,
      user_id,
      guest_id,
      tracking_number,
      status,
      city,
      district,
      address1,
      address2,
      recipient,
      phone,
      request,
    } = req.body;

    await Shipment.create({
      order_id,
      user_id,
      guest_id,
      tracking_number,
      status,
      city,
      district,
      address1,
      address2,
      recipient,
      phone,
      request,
    });
    res.send('배송 정보가 생성되었습니다.');
  } catch (err) {
    next(err);
  }
};

export default postShipment;