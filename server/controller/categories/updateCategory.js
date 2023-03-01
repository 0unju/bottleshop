'use strict';
import { Category } from '../../models/index.js';

const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.updateOne(
      { _id: id },
      {
        name,
      }
    );
    res.json(category);

  } catch (err) {
    next(err);
  }
};

export default updateCategory;
