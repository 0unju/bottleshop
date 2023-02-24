'use strict';
import { Post } from '../../models/index.js';

const updatePostComment = async (req, res) => {
    try {
        console.log("in");
        const { id } = req.params; 
        const comment_id = req.comment._id;
        const post = await Post.updateOne({ _id: id },
            { $push: { comment: comment_id },
        });
        console.log('saved in database');
        res.send(post);
    } catch(err) {
        console.log(err.message);
    }
};

export default updatePostComment;