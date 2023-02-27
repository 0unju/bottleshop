"use strict";
import { User } from "../../models/index.js";
import bcrypt from "bcrypt"; // "npm i bcrypt --save" 설치 필요
import jwt from "jsonwebtoken"; // "npm i jsonwebtoken" 설치 필요
const getLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // username DB 존재 확인
    const user = await User.findOne({ username });

    if (!user) {
      res.send("존재하지 않은 아이디입니다.");
      next();
    } else {
      // password 확인
      if (bcrypt.compareSync(password, user.password) === false) {
        res.send("비밀번호가 틀렸습니다.");
        next();
      } else {
        // token 생성
        const token = jwt.sign(user._id.toHexString(), "secretToken");
        console.log("token=" + token);

        if (token) {
          res.cookie("x_auth", token).status(200).json({
            loginSuccess: true,
            username: user.username,
          });
        } else {
          res.status(400).send(err);
        }
      }
    }
  } catch (err) {
    next(err);
  }
};

export default getLogin;
