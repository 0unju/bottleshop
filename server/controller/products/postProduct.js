'use strict';
import { Product } from '../../models/index.js';
import imgfile from '../../routes/images.js';

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
      image_path: imgfile,
    });

    console.log('saved in database');
    res.send('success /products');
  } catch (err) {
    console.log(err.message);
  }
};

export default postProduct;
