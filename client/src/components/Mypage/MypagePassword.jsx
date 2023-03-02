import React, { useRef } from "react";
import "./MypagePassword.css";
import { Nav, Button, Form } from "react-bootstrap";

const MypagePassword = () => {
  // Element 제어

  let inputPassword = useRef(null);
  let inputPasswordCheck = useRef(null);

  return (
    <>
      <div id="mypage_password_topbox">
        <div>반갑습니다. 손민하님</div>
        <div id="mypage_password_count">
          <div class="mypage_password_box">
            <p>구매내역</p>
            <p>10</p>
          </div>
          <div class="mypage_password_box">
            <p>배송중</p>
            <p>2</p>
          </div>
          <div class="mypage_password_box">
            <p>배송완료</p>
            <p>8</p>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <Nav
        id="mypage_password_nav_bar"
        variant="tabs"
        defaultActiveKey="/mypage/password"
      >
        <Nav.Item>
          <Nav.Link href="/mypage/order">주문조회</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mypage/information">회원정보수정</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mypage/password">비밀번호변경</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mypage/leave">회원탈퇴</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* 데이터 수정 */}
      <div id="mypage_password_data">
        <div id="mypage_password_password">
          <Form.Group className="mypage_password_input">
            <Form.Label>현재 비밀번호</Form.Label>
            <Form.Control
              ref={inputPassword}
              type="text"
              placeholder="String"
            />
          </Form.Group>
          <Form.Group className="mypage_password_input">
            <Form.Label>변경할 비밀번호</Form.Label>
            <Form.Control
              ref={inputPassword}
              type="text"
              placeholder="String"
            />
          </Form.Group>

          <Form.Group className="mypage_password_input">
            <Form.Label>변경할 비밀번호 확인 </Form.Label>
            <Form.Control
              ref={inputPasswordCheck}
              type="text"
              placeholder="String"
            />
          </Form.Group>
        </div>
        <div id="mypage_password_button">
          <Button id="mypage_password_save_button">저장</Button>
        </div>
      </div>
    </>
  );
};
export default MypagePassword;
