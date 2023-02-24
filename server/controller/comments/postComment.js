'use strict';
import { Comment, Post } from '../../models/index.js';

const postComment = async (req, res) => {
    const { id } = req.params;      // 게시글 _id
    const { content } = req.body;
    
    try {
        if(req.user.isAdmin == true) {
            const comment = await Comment.create({
                post_id : id,
                content : content,
            });

            const comment_id = comment._id;

            await Post.updateOne(
                { _id : id },
                { $push: { comment: { comment_id }},
            });
            console.log('saved in database');
            res.send('[USER] success /posts');
        }
        else {
            res.send('access denied "/posts/:id/comments"');
        }
    } catch(err) {
        console.log(err.message);
    }
};

export default postComment;