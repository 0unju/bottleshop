'use strict';
import { Shipment, Order } from '../../models/index.js';

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

    const shipmentInfo = await Shipment.create({
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

    res.send('success /shipments');
  } catch (err) {
    next(err);
  }
};

export default postShipment;
