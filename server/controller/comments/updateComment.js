'use strict';
import { Comment } from '../../models/index.js';

// http://localhost:8080/posts/{post_id}/comments/{comment_id}
const updateComment = async (req, res) => {
    const { post_id, comment_id } = req.params;
    const { content } = req.body;
  
    const post = await Comment.updateOne(
        { _id : comment_id, post_id: post_id },
        {
            content,
        }
    );

    // res.redirect(`/posts/${id}`);

    res.send(post);
}

export default updateComment;