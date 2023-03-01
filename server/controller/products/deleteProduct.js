'use strict';
import { Product } from '../../models/index.js';
import fs from 'fs';

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  const path = await Product.findOne({ _id: id });
  const product_path = path.image_path;
  fs.unlinkSync(product_path);

  const product = await Product.deleteOne({ _id: id });
  res.send(product);
};

export default deleteProduct;
