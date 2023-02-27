import React, { useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

// JSON 가져오기
const api = require("../../api.json"); // API 불러오기

const Login = () => {
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);

  const handleButtonClick = async () => {
    const username = inputUserName.current.value;
    const password = inputPassword.current.value;

    let success = false;

    await axios
      .post(
        api.users_login_POST,
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("로그인 되었습니다");
          window.location.href = "/categories";
          success = true;
        }
      })
      .catch((err) => {
        alert(err.message);
        success = true;
      });
    if (!success) alert("ID,PW를 바르게 입력해 주세요");
  };

  return (
    <>
      <div id="login_box">
        <h1 id="login_h1">Login</h1>
        <Form id="login_form">
          <Form.Group id="login_input">
            <Form.Control
              id="login_input_id"
              ref={inputUserName}
              placeholder="ID"
              type="text"
            />
            <Form.Control
              id="login_input_password"
              ref={inputPassword}
              placeholder="Password"
              type="password"
            />
          </Form.Group>

          <div id="login_user_button">
            <Button id="login_login_button" onClick={handleButtonClick}>
              로그인
            </Button>
          </div>
          <div>
            <Button id="login_signup_button" href="/signup/consent">
              회원가입
            </Button>
          </div>
        </Form>
        <div id="login_nonuser_button">
          <Button id="login_nonuser_order_button">비회원 주문하기</Button>
        </div>
        <div>
          <Button id="login_nonuser_ordercheck_button">비회원 주문조회</Button>
        </div>
      </div>
    </>
  );
};
export default Login;
