import React, { useRef } from "react";
import "./MypageInformation.css";
import { Nav, Button, Form } from "react-bootstrap";

const MypageOrder = () => {
  // Element 제어

  let inputName = useRef(null);
  let inputPhone = useRef(null);
  let inputBirthday = useRef(null);

  return (
    <>
      <div id="mypage_information_topbox">
        <div>반갑습니다. 손민하님</div>
        <div id="mypage_information_count">
          <div class="mypage_information_box">
            <p>구매내역</p>
            <p>10</p>
          </div>
          <div class="mypage_information_box">
            <p>배송중</p>
            <p>2</p>
          </div>
          <div class="mypage_information_box">
            <p>배송완료</p>
            <p>8</p>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <Nav
        id="mypage_information_nav_bar"
        variant="tabs"
        defaultActiveKey="/mypage/information"
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
      <div id="mypage_information_data">
        <div id="mypage_information_other">
          <Form.Group className="mypage_information_input">
            <Form.Label>이름</Form.Label>
            <Form.Control ref={inputName} type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mypage_information_input">
            <Form.Label>휴대폰번호</Form.Label>
            <Form.Control ref={inputPhone} type="phone" placeholder="Number" />
          </Form.Group>

          <Form.Group className="mypage_information_input">
            <Form.Label>생일</Form.Label>
            <Form.Control ref={inputBirthday} type="date" />
          </Form.Group>
        </div>
        <div id="mypage_information_button">
          <Button id="mypage_information_save_button">저장</Button>
        </div>
      </div>
    </>
  );
};
export default MypageOrder;
