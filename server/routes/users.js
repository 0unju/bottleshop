'use strict';
import express from 'express';
import auth from '../middleware/auth.js';
import { User } from '../models/index.js';
const router = express.Router();
import getUser from '../controller/userController.js';
import getLogin from '../controller/loginController.js';
import dropUser from '../controller/deleteController.js';

router.get('/', (req, res) => {
    res.render('users');
});

router.get('/join', (req, res, next) => {
    res.render('join');
});

router.get("/login", (req, res) => {
    res.render('login');
});

// http://localhost:8080/users/join
router.post('/join', getUser);

// http://localhost:8080/users/login
router.post('/login', getLogin);

// http://localhost:8080/users/auth
router.get("/auth", auth, (req, res) => {
  res.send("token auth ok")
});

// http://localhost:8080/users/logout
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    res.clearCookie("x_auth");
    return res.status(200).send({
      success: true,
    });
  });
});

// http://localhost:8080/users/drop
router.post('/drop', dropUser);

export default router;
