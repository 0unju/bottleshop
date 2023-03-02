import React, { useEffect, useRef, useState } from "react";
import "./MypageOrder.css";
import { Nav, Accordion, Table } from "react-bootstrap";
import axios from "axios";

const MypageOrder = () => {
  const [cookieUserDB, setCookieUserDB] = useState(null); // 쿠키 유저이름
  const [ordersDB, setordersDB] = useState(null); // orders DB
  const [shipmentsDB, setshipmentsDB] = useState(null); // shipments DB
  const [productsDB, setproductsDB] = useState(null); // products DB
  const api = require("../../api.json"); // API 불러오기

  const getName = async () => {
    setCookieUserDB(
      await axios.get(api.users_auth_GET).then((response) => response.data) // 쿠키 유저이름 가져오기
    );
  };

  const getOrder = async () => {
    setordersDB(
      await axios.get(api.orders_GET).then((response) => response.data) // orders data 가져오기
    );
  };
  console.log(ordersDB);

  const getShipment = async () => {
    setshipmentsDB(
      await axios.get(api.shipment_GET).then((response) => response.data) // shipments data 가져오기
    );
  };

  const getDate = async () => {
    const response = await axios.get(api.products_GET);
    setproductsDB(response.data); // products data 가져오기
  };

  const [before, setBefore] = useState(0);
  const [ing, setIng] = useState(0);
  const [complete, setComplete] = useState(0);

  let cookieUserordersData = [];
  ordersDB?.map((data) => {
    if (data.user_id === cookieUserDB?._id) {
      cookieUserordersData.push(data);
    }
  });

  let cookieUsershipmentsData = [];
  shipmentsDB?.map((data) => {
    if (data.user_id === cookieUserDB?._id) {
      cookieUsershipmentsData.push(data);
    }
  });

  const setCount = () => {
    cookieUsershipmentsData.map((val) => {
      if (val.status === "배송전") setBefore(before + 1);
      else if (val.status === "배송중") setIng(ing + 1);
      else if (val.status === "배송완료") setComplete(complete + 1);
    });
  };

  useEffect(() => {
    getName();
    getOrder();
    getShipment();
    getDate();
  }, []);

  useEffect(() => {
    setCount();
  }, [before, ing, complete]);

  // 주문 조회 페이지
  // let orderList = [];

  // const handelListClick = (shipments) => {
  //   // console.log(shipments);
  //   cookieUserordersData.forEach((ordersData) => {
  //     // 배송정보와 일치하는 주문정보 찾기
  //     if (shipments.order_id === ordersData._id) {
  //       // console.log(ordersData);
  //       ordersData.product_id?.map((productID) => {
  //         console.log(productID);
  //         console.log(ordersData.count[productID]);
  //         orderList.push(
  //           <tr key={productID}>
  //             <td>{productID}</td>
  //             <td>{ordersData.count[productID]}</td>
  //           </tr>
  //         );
  //       });
  //     }
  //   });
  // };
  return (
    <>
      <div id="mypage_order_title">
        반갑습니다. {cookieUserDB?.name}({cookieUserDB?.username})님
      </div>

      {/* 네비게이션 바 */}
      <Nav
        id="mypage_order_nav_bar"
        variant="tabs"
        defaultActiveKey="/mypage/order"
      >
        <Nav.Item>
          <Nav.Link id="mypage_order_nav" href="/mypage/order">
            주문조회
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="mypage_order_nav" href="/mypage/information">
            회원정보수정
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="mypage_order_nav" href="/mypage/password">
            비밀번호변경
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="mypage_order_nav" href="/mypage/leave">
            회원탈퇴
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div id="mypage_order_count">
        <div class="mypage_order_box">
          <p>구매내역</p>
          <p>{cookieUsershipmentsData.length}</p>
        </div>
        <div class="mypage_order_box">
          <p>배송전</p>
          <p>{before}</p>
        </div>
        <div class="mypage_order_box">
          <p>배송중</p>
          <p>{ing}</p>
        </div>
        <div class="mypage_order_box">
          <p>배송완료</p>
          <p>{complete}</p>
        </div>
      </div>

      {/* 주문 리스트 */}
      <Accordion id="mypage_order_orderlist">
        {cookieUsershipmentsData?.map((shipmentsData) => (
          <>
            <Accordion.Item eventKey={shipmentsData?._id}>
              {/* <Accordion.Header onClick={() => handelListClick(shipmentsData)}> */}
              <Accordion.Header>
                {shipmentsData.createdAt.split("T")[0]} 주문 [
                {shipmentsData.status}]
              </Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover size="sm" id="DB_countlist">
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>수량</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieUserordersData.forEach((ordersData) =>
                      shipmentsData?.order_id === ordersData?._id
                        ? ordersData.product_id.map((productID) => {
                            console.log(productID);
                            console.log(ordersData.count[productID]);
                            <tr key={productID}>
                              <td>{productID}</td>
                              <td>{ordersData.count[productID]}</td>
                            </tr>;
                          })
                        : null
                    )}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </>
        ))}
      </Accordion>
    </>
  );
};
export default MypageOrder;
