import multer from 'multer';
import path from 'path';

const fileFilter = (req, file, cb) => {
  // 확장자 필터링
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true); // 해당 mimetype만 받음
  } else {
    req.fileValidationError =
      'jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.';
    cb(null, false);
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, '/uploads');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
    },
  }),
});
