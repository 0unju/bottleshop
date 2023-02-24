'use strict';
import { User } from '../../models/index.js';

const postUser = async (req, res, next) => {
  const {
    username,
    domain,
    password,
    name,
    phone,
    birthday,
    auth_email,
  } = req.body;
  
  try {
    const user = await User.findOne({ username });
    
    if(user) {  // 아이디 중복 확인
      console.log('"' + username + '" already exists');
      res.send('User already exists');
    }

    else {
      let adminValue = false;
      
      if(username === "admin") {
        adminValue = true;
        console.log("getADMIN");
      }
      await User.create({
        isAdmin:adminValue,
        username,
        domain,
        password,
        name,
        phone,
        birthday,
        auth_email,
      });
      console.log('saved in database');
      res.send('success /users');
    } 
  } catch (err) {
    console.log(err.message);
  }
};

export default postUser;