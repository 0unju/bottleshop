import React, { useEffect, useState, useRef } from "react";
import "./MypageLeave.css";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

const MypageOrder = () => {
  const inputPassword = useRef();
  return (
    <>
      <div id="mypage_leave_topbox">
        <div>반갑습니다. 손민하님</div>
        <div id="mypage_leave_count">
          <div class="mypage_leave_box">
            <p>구매내역</p>
            <p>10</p>
          </div>
          <div class="mypage_leave_box">
            <p>배송중</p>
            <p>2</p>
          </div>
          <div class="mypage_leave_box">
            <p>배송완료</p>
            <p>8</p>
          </div>
        </div>
      </div>

      {/* 네비게이션 바 */}
      <Nav
        id="mypage_leave_nav_bar"
        variant="tabs"
        defaultActiveKey="/mypage/leave"
      >
        <Nav.Item>
          <Nav.Link href="/mypage/order">주문조회</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mypage/information">회원정보수정</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mypage/leave">회원탈퇴</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탈퇴 */}
      <div id="mypage_leave_box">
        <p id="mypage_leave_text">탈퇴 하실려면 비밀번호를 입력해 주세요</p>
        <div id="mypage_leave_password">
          <Form.Control
            id="mypage_leave_input_password"
            ref={inputPassword}
            type="text"
          />
          <Button id="mypage_information_leave_button">탈퇴하기</Button>
        </div>
      </div>
    </>
  );
};
export default MypageOrder;
