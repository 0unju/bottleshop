import "./SignUp_information.css";
import { React } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

// JSON 가져오기
const domain_list = require("../../Domain_list.json"); // Domain 리스트 불러오기

const button_click = () => {
  const check1 = document.querySelector("#chekbox_1");
  const check2 = document.querySelector("#chekbox_2");
  console.log(check1.checked);
  console.log(check2.checked);
  if (check1.checked && check2.checked) {
    alert("ok");
  }
};

// Domain List 만들기
const domain_form_list = [];
domain_list.forEach((data, index) => {
  domain_form_list.push(
    <option key={index} value={data.name}>
      {data.name}
    </option>
  );
});

const SignUp_information = () => {
  return (
    <>
      <h1 id="information_h1">이용약관</h1>
      <div id="information_h3">
        <h3>이용약관</h3>
        <h3>{">"}</h3>
        <h3>기본정보 입력</h3>
        <h3>{">"}</h3>
        <h3>가입완료</h3>
      </div>

      <Form id="information_form">
        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label className="information_label">아이디 *</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="information_label">도메인 *</Form.Label>
            <Form.Select defaultValue="">
              <option></option>
              {domain_form_list}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-5">
          <Form.Label className="information_label">비밀번호 *</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label className="information_label">비밀번호 확인 *</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label className="information_label">이름 *</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label className="information_label">전화번호 *</Form.Label>
          <Form.Control type="phone" />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label className="information_label">생년월일 *</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Form>

      <Button id="information_button" onClick={button_click}>
        가입하기
      </Button>
    </>
  );
};
export default SignUp_information;
