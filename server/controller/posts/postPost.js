'use strict';
import { Post } from '../../models/index.js';

const postPost = async (req, res, next) => {
    const { title, content, email } = req.body;
    
    try {
        if (!title || !content) {
            throw new Error('제목과 내용을 입력해 주세요');
        }

        // 로그인한 유저인 경우
        if (req.flagGuest == false) {
            await Post.create({
                user_id : req.user._id,
                isAdmin : req.user.isAdmin,
                title,
                content,
                email,
            });
            console.log('saved in database');
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
            console.log('saved in database');
            res.send('[GUEST] success /posts');
        }

        //res.redirect(`/posts/${post.id}`);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
}

export default postPost;