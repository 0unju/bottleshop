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

    await Shipment.updateOne(
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
    res.send("배송 정보가 수정되었습니다.");
  } catch (err) {
    next(err);
  }
};

export default updateShipment;