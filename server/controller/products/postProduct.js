'use strict';
import { Product } from '../../models/index.js';

const postProduct = async (req, res, next) => {
  try {
    const {
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    } = req.body;

    const productInfo = await Product.create({
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    });

    res.send('success /products');
  } catch (err) {
    next(err);
  }
};

export default postProduct;
