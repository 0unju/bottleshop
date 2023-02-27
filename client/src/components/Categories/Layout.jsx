import React, { useState } from "react";
import "./Layout.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import { FaCartArrowDown, FaSistrix, FaGithubAlt } from "react-icons/fa";
import axios from "axios";
axios.defaults.withCredentials = true; // withCredentials 전역 설정
const api = require("../../api.json"); // API 불러오기

const Layout = ({ children }) => {
  const [cookieUserData, setCookieUserData] = useState(null); // 쿠키 유저이름
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setCookieUserData(
      await axios.get(api.users_auth_GET).then((response) => response.data) // 쿠키 유저이름 가져오기
    );
    setShow(true);
  };
  const cartClick = (e) => {
    window.location.href = "/order/cart";
  };

  //로그아웃 함수
  const handleLogoutClick = async () => {
    await axios
      .get(api.users_logout_GET)
      .then((response) => {
        if (response.data.success === true) {
          setShow(false);
          alert("로그아웃 성공");
        }
      })
      .catch((err) => alert(err.message));
  };

  // 로그인 유무 구별

  let checkCookie = [];
  if (document.cookie) {
    checkCookie = [];
    checkCookie.push(
      <>
        <p>{cookieUserData?.name}님 안녕하세요!!</p>
        <Button id="layout_logout_button" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </>
    );
  } else {
    checkCookie = [];
    checkCookie.push(<a href="/login">로그인 해주세요 </a>);
  }

  //런처 리스트 구현
  let luncherList = [];
  if (document.cookie) {
    luncherList = [];
    if (cookieUserData?.username === "admin")
      luncherList.push(
        <>
          <a href="/admin/products">관리자페이지 </a>
          <br />
        </>
      );
    luncherList.push(
      <>
        <a>마이페이지</a>
        <br />
        <a href="/order/order">주문조회</a>
      </>
    );
  } else {
    luncherList = [];
    luncherList.push(
      <>
        <a href="/signup/consent">회원가입 </a>
        <br />
        <a>비회원 주문조회</a>
      </>
    );
  }

  return (
    <div className="wrapper">
      <header>
        <div>
          <a class="Main_Logo" href="/">
            Bottle Shop
          </a>
        </div>
        <Navbar id="nav_main" className="navbar" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Wine" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/categories/wine">
                    All Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    Red Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    White Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    Sparkling Wine
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/categories/cheeses">Cheeses</Nav.Link>
                <Nav.Link href="#">Q&A</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <FaSistrix variant="outline-success" />
              </Form>
              <div onClick={cartClick} className="cart">
                <FaCartArrowDown />
              </div>

              {/* 주문조회,회원로그인 런처 */}
            </Navbar.Collapse>
            <FaGithubAlt variant="white" onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="login">
                  Bottle Shop <br />
                  <br />
                  {checkCookie}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <hr />
                {luncherList}
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
      <main className="main_content">{children}</main>
      <footer className="footer">
        <div className="contaier">
          <div className="row">
            <h2>Bottle Shop</h2>
            <ul className="list-unstyled">
              <li>
                대표번호: 051-100-1004 | 이메일: sulsajo@gmail.com | 대표자:
                손민하{" "}
              </li>
              <li>
                주소: 대한민국 부산 | 법인명: (주)술사조 | 사업자등록정보:
                2023-03-03-1500 | Author by Team4 | Copyright ⓒ 2023 Team4.All
                rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
