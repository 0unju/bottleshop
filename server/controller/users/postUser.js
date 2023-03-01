'use strict';
import { User } from '../../models/index.js';
import bcrypt from 'bcrypt';  // "npm i bcrypt --save" 설치 필요
const saltRounds = 10;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

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
      res.send('User already exists');
    } else {
      let adminValue = false;
      
      if(passwordRegex.test(password) === false) {
        res.send("비밀번호 조건이 맞지 않습니다.");
        next();
      } else {
        const hash = bcrypt.hashSync(password, saltRounds);
        if(username === "admin") {
          adminValue = true;
        }
        await User.create({
          isAdmin : adminValue,
          username,
          domain,
          password : hash,
          name,
          phone,
          birthday,
          auth_email,
        });
        res.send('success /users');
      }
      
    } 
  } catch (err) {
    next(err);
  }
};

export default postUser;