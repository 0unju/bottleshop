'use strict';
import { User } from '../../models/index.js';

const logoutUser = async (req, res, next) => {
  try {
      User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
          if (err) return res.json({ success: false, err });
          res.clearCookie("x_auth");
          return res.status(200).send({
            id: user.username,
            success: true,
          });
      });     
  } catch (err) {
    next(err);
  }
};

export default logoutUser;