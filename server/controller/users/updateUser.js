'use strict';
import { User } from '../../models/index.js';

const updateUser = async (req, res, next) => {
  try{
    const { userId } = req.params;
    const { name, phone, birthday } = req.body;
  
    // 로그인한 유저와 admin만 정보 수정 가능
    if((userId === req.user.userId) || (req.user.isAdmin === true)) {
      const user = await User.updateOne(
        { userId },
        {
          name,
          phone,
          birthday,
        }
      );
      res.send(user);
    } else {
      res.send("access denied /users/edit");
    }
  } catch (err) {
    console.log(err);
  }
}

export default updateUser;