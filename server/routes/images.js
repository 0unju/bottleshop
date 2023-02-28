import express from 'express';
import fs from 'fs';
import uploadImage from './multer.js';

const router = express.Router();

// upload image
router.post('/', uploadImage.single('image'), (req, res, next) => {
  const imgFile = req.file;
  res.send('success');
  console.log(imgFile);
});

//delete image
router.delete('/', async (req, res) => {
  if (fs.existsSync('public/images')) {
    try {
      fs.unlinkSync('public/images');
      console.log('image deleted');
    } catch (err) {
      console.log(err.message);
    }
  }
});

export default router;
