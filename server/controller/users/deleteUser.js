'use strict';
import { User } from '../../models/index.js';

const deleteUser = async (req, res, next) => {
    const { userId } = req.params;

    // 로그인한 유저와 admin만 정보 삭제 가능
    if((userId === req.user.userId) || (req.user.isAdmin === true)) {
        const user = await User.deleteOne({ userId });
        res.send(user);
    } else {
        res.send("access denied /users/delete");
    }
};

export default deleteUser;