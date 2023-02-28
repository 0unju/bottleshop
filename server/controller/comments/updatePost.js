'use strict';
import { Post } from '../../models/index.js';

const updatePostComment = async (req, res) => {
    try {
        const { id } = req.params; 
        const comment_id = req.comment._id;
        const post = await Post.updateOne({ _id: id },
            { $push: { comment: comment_id },
        });
        res.send(post);
    } catch(err) {
        next(err);
    }
};

export default updatePostComment;