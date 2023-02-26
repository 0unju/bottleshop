// 회원/비회원 인증 로직
'use strict';
import { User } from '../models/index.js';

const auth = async (req, res, next) => {
    const token = req.cookies.x_auth;
    const guest = (token === undefined);

    if(guest === false) {
        await User.findByToken(token)
        .then((user) => {
            if(!user) return res.json({ isAuth: false, error: true });
            req.token = token;
            req.user = user;
            req.flagGuest = false;
            next();
        })
        .catch((err) => {
            next(err);
        });
    }   else {
        req.flagGuest = true;
        next();
    }
};

export default auth;