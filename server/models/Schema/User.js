'use strict';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';  // "npm i bcrypt --save" 설치 필요
const saltRounds = 10;

const UserSchema = new Schema(
  {
    isAdmin: false,
    username: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    auth_email : {
      type: Boolean,
      default: false,
    },
    birthday: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.pre("save", function (next) {
  const user = this;

  //model 안의 paswsword가 변환될때만 암호화
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

export default UserSchema;