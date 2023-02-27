'use strict';
import { User } from '../../models/index.js';

const deleteUser = async (req, res, next) => {
    const { username } = req.params;

    // 로그인한 유저와 admin만 정보 삭제 가능
    if((username === req.user.username) || (req.user.isAdmin === true)) {
        const user = await User.deleteOne({ username });
        res.send(user);
    } else {
        res.send("access denied /users/:username");
    }
};

export default deleteUser;