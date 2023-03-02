'use strict';

const authUser = (req, res) => {
    if (req.flagGuest === false) {
        res.send("사용자 인증에 성공하였습니다.");
    } else {
        res.send("사용자 인증에 실패하였습니다.");
    }
}

export default authUser;