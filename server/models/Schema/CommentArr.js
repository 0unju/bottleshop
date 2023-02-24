'use strict';
import { Schema } from 'mongoose';

// 관리자 외에 댓글 달 수 있게 하려면 isAdmin, user_id, writer 추가
const CommentArrSchema = new Schema(
{
    comment_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Comment',
    },
},
{
      timestamps: true,
});
  
export default CommentArrSchema;
