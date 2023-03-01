'use strict';
import { User } from '../../models/index.js';

const updateUser = async (req, res, next) => {
  try{
    const { username } = req.params;
    const { name, phone, birthday } = req.body;
  
    // 로그인한 유저와 admin만 정보 수정 가능
    if((username === req.user.username) || (req.user.isAdmin === true)) {
        await User.updateOne(
          { username },
          {
            name,
            phone,
            birthday,
          },
        );
      res.send("success /users");
    } else {
      res.send("access denied /users/:username");
    }
  } catch (err) {
    next(err);
  }
}

export default updateUser;