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

    console.log(shipmentInfo);
    res.send('success /shipments');
    console.log('saved in database');
  } catch (err) {
    res.status(400)
    console.log(err.message);
  }
};

export default postShipment;
