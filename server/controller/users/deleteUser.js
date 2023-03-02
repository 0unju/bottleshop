'use strict';
import { User } from '../../models/index.js';

const deleteUser = async (req, res, next) => {
    try{
        const { username } = req.params;

        // 로그인한 유저와 admin만 정보 삭제 가능
        if((username === req.user.username) || (req.user.isAdmin === true)) {
            await User.deleteOne({ username });
            res.send("사용자 정보가 삭제되었습니다.");
        } else {
            res.send("삭제할 권한이 없습니다.");
        }
    } catch (err) {
        next(err);
    }
};

export default deleteUser;