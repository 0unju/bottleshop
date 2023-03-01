'use strict';
import { User } from '../../models/index.js';
import bcrypt from 'bcrypt';  // "npm i bcrypt --save" 설치 필요
const saltRounds = 10;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
// import jwt from "jsonwebtoken"; // "npm i jsonwebtoken" 설치 필요

const updateUser = async (req, res, next) => {
  try{
    const { username } = req.params;
    const { name, password, currentPassword, phone, birthday } = req.body;
  
    // 로그인한 유저와 admin만 정보 수정 가능
    if((username === req.user.username) || (req.user.isAdmin === true)) {
      // 비밀번호 변경하지 않을 때
      if(!password) {
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
        // 비밀번호 변경할 때
        if(!currentPassword) {
          res.send("현재 비밀번호 입력이 되지 않았습니다.");
        } else {
          if(bcrypt.compareSync(currentPassword, req.user.password) === false) {
            res.send("현재 비밀번호가 틀렸습니다.");
          } else {
            if(passwordRegex.test(password) === false) {
              res.send("비밀번호 조건이 맞지 않습니다.")
            } else {
              const hash = bcrypt.hashSync(password, saltRounds);
              await User.updateOne(
                { username },
                {
                  name,
                  password: hash,
                  phone,
                  birthday,
                },
              );
            }
          }
        }
      }
      res.send("success /users password");
    } else {
      res.send("access denied /users/:username");
    }
  } catch (err) {
    next(err);
  }
}

export default updateUser;