'use strict';
import { Category } from '../../models/index.js';

const postCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    await Category.create({
      name,
    });

    res.send('success /categories');
  } catch (err) {
    next(err);
  }
};

export default postCategory;
