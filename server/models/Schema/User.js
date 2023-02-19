'use strict';
import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    isAdmin: false,
    email: {
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
      type: Number,
      required: true,
    },
    auth_email: {
      type: Boolean,
      required: true,
    },
    birthday: Date,
  },
  {
    timestamps: true,
  }
);

export default UserSchema;
