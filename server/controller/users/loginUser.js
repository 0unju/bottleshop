'use strict';
import { User } from '../../models/index.js';

const getLogin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        // username DB 존재 확인
        await User.findOne({ username }, (err, user) => {
            if (err) {
                res.send("존재하지 않은 아이디입니다.");
            }
            user
                .comparePassword(password)  // password 확인
                .then((isMatch) => {
                    if (!isMatch) {
                        res.send("비밀번호가 틀렸습니다.");
                    }
                user
                    .generateToken()        // token 생성
                    .then((user) => {
                        res.cookie("x_auth", user.token).status(200).json({
                            loginSuccess: true,
                            username: user._id,
                        });
                    })
                    .catch((err) => {
                        res.status(400).send(err);
                    });
                })
                .catch((err) => res.json({ loginSuccess: false, err }));
        });
        
    } catch(err) {
        console.log(err.message);
    }
};

export default getLogin;