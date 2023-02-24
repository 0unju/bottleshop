'use strict';
import { Post } from '../../models/index.js';

const viewComment = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id : id })
        .populate('comment', 'post_id content createdAt updatedAt')
        .exec();
    // const comment = await Comment.populate(post.comment, { path: 'comment' });
    res.json(post);
};

export default viewComment;