'use strict';
import { Post, Comment } from '../../models/index.js';

const viewComment = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id : id });
    
    // post.comment 의 댓글 populate 하기
    await Comment.populate(post.comment, { path: 'comment_id' });
    res.json(post.comment);
};

export default viewComment;