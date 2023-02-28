'use strict';
import { Category } from '../../models/index.js';

const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.deleteOne({ _id: id });
  res.send(category);
};

export default deleteCategory;
