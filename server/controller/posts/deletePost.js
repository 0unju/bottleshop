'use strict';
import { Post } from '../../models/index.js';

const deletePost = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.deleteOne({ id });
    res.send(post);
};

export default deletePost;