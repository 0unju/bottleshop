'use strict';
import { Post } from '../../models/index.js';

const postPost = async (req, res, next) => {
    const { title, content, email } = req.body;
    
    try {
        if (!title || !content) {
            res.status(500).send({ error: 'title content Null' });
        }

        // 로그인한 유저인 경우
        if (req.flagGuest === false) {
            await Post.create({
                user_id : req.user._id,
                isAdmin : req.user.isAdmin,
                title,
                content,
                email,
            });
            res.send('[USER] success /posts');
        }

        // 비회원일 경우
        else {
            await Post.create({
                isAdmin : false,
                title,
                content,
                email,
            });
            res.send('[GUEST] success /posts');
        }

        //res.redirect(`/posts/${post.id}`);
    } catch (err) {
        next(err);
    }
}

export default postPost;