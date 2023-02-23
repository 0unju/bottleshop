'use strict';
import { Shipment } from '../../models/index.js';

const updateShipment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
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

    const shipment = await Shipment.updateOne(
      { _id: id },
      {
        tracking_number,
        status,
        city,
        district,
        address1,
        address2,
        recipient,
        phone,
        request,
      }
    );

    res.json(shipment);
  } catch (err) {
    console.log(err.message);
  }
};

export default updateShipment;
