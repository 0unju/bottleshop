'use strict';
import { Product } from '../../models/index.js';

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.deleteOne({ _id: id });
  res.send(product);
};

export default deleteProduct;
