'use strict';
import { Schema } from 'mongoose';
import CommentArrSchema from './CommentArr.js';

const PostSchema = new Schema(
  {
    isAdmin: false,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isAdmin: {
      type: Schema.Types.Boolean,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      default: '작성자',
    },
    comment : [CommentArrSchema],
  }, {
    timestamps: true,
  }
);

export default PostSchema;