'use strict';
import { Comment } from '../../models/index.js';

const postComment = async (req, res, next) => {
    const { id } = req.params;      // 게시글 _id
    const { content } = req.body;
    
    try {
        if(req.user.isAdmin === true) {
            const comment = await Comment.create({
                post_id : id,
                content : content,
            });
            req.comment = comment;
            next();
        }
        else {
            res.send('access denied "/posts/:id/comments"');
        }
    } catch(err) {
        next(err);
    }
};

export default postComment;