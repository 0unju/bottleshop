'use strict';
import { User } from '../../models/index.js';

const getUser = async (req, res, next) => {
  const {
    userId,
    domain,
    password,
    name,
    phone,
    birthday,
    auth_email,
  } = req.body;
  
  try {
    const user = await User.findOne({ userId });
    
    if(user) {  // 아이디 중복 확인
      console.log('"' + userId + '" already exists');
      res.send('User already exists');
    }

    else {
      let adminValue = false;
      
      if(userId === "admin") {
        adminValue = true;
        console.log("getADMIN");
      }
      const userInfo = await User.create({
        isAdmin:adminValue,
        userId,
        domain,
        password,
        name,
        phone,
        birthday,
        auth_email,
      });
      userInfo.save();

      console.log('saved in database');
      res.send('success /users');
    } 
  } catch (err) {
    console.log(err.message);
  }
};

export default getUser;