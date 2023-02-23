'use strict';
import { Shipment } from '../../models/index.js';

const deleteShipment = async (req, res, next) => {
  const { id } = req.params;
  const shipment = await Shipment.deleteOne({ _id: id });
  res.send(shipment);
};

export default deleteShipment;
