'use strict';
import { Product } from '../../models/index.js';

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, type, price, description, wine_type, origin, abv, image_path } =
    req.body;
  try {
    const product = await Product.updateOne(
      { _id: id },
      {
        name,
        type,
        price,
        description,
        wine_type,
        origin,
        abv,
        image_path,
      }
    );

    res.json(product);
    console.log(product);
  } catch (err) {
    console.log(err.message);
  }
};

export default updateProduct;
