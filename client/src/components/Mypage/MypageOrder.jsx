import "./MypageOrder.css";
import { Nav, Accordion } from "react-bootstrap";

const MypageOrder = () => {
  return (
    <>
      <div id="mypage_order_topbox">
        <div>반갑습니다. 손민하님</div>
        <div id="mypage_order_count">
          <div class="mypage_order_box">
            <p>구매내역</p>
            <p>10</p>
          </div>
          <div class="mypage_order_box">
            <p>배송중</p>
            <p>2</p>
          </div>
          <div class="mypage_order_box">
            <p>배송완료</p>
            <p>8</p>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <Nav
        id="mypage_order_nav_bar"
        variant="tabs"
        defaultActiveKey="/mypage/order"
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
      {/* 주문 리스트 */}
      <Accordion id="mypage_order_orderlist">
        <Accordion.Item eventKey="0">
          <Accordion.Header>2022.10.12주문 [구매완료]</Accordion.Header>
          <Accordion.Body>주문 상품 리스트</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2022.08.08주문 [배송완료]</Accordion.Header>
          <Accordion.Body>주문 상품 리스트</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default MypageOrder;
