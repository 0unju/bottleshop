"use strict";
import express from "express";
const router = express.Router();
import { User } from "../models/index.js";
import auth from "../middleware/auth.js";
import postUser from "../controller/users/postUser.js";
import loginUser from "../controller/users/loginUser.js";
import authUser from "../controller/users/authUser.js";
import logoutUser from "../controller/users/logoutUser.js";
import deleteUser from "../controller/users/deleteUser.js";
import updateUser from "../controller/users/updateUser.js";

// http://localhost:8080/users (전체 회원 조회)
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// router.get('/', auth, async (req, res) => {
//   if(req.user.isAdmin == true){
//     const users = await User.find({});
//     res.json(users);
//   } else {
//     res.render('login');
//   }
// });

// http://localhost:8080/users/join (회원가입)
router.post("/join", postUser);

// http://localhost:8080/users/login (로그인)
router.post("/login", loginUser);

// http://localhost:8080/users/auth (현재 로그인한 user 정보)
router.get("/auth", auth, authUser);

// http://localhost:8080/users/logout (로그아웃)
router.get("/logout", auth, logoutUser);

// http://localhost:8080/users/delete/test1 (유저 정보 DB 삭제)
router.delete("/delete/:username", auth, deleteUser);

// http://localhost:8080/users/edit/test1 (유저 정보 수정)
router.put("/edit/:username", auth, updateUser);

export default router;
