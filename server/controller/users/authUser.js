'use strict';

const authUser = (req, res) => {
    if (req.flagGuest === false) {
        res.status(200).json({
            _id: req.user._id,
            username: req.user.username,
            domain: req.user.domain,
            name: req.user.name,
            phone: req.user.phone,
            birthday: req.user.birthday,
          });
    } else {
        res.send("GUEST auth");
    }
}

export default authUser;