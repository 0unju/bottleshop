import { React, useState, useEffect } from "react";
import Axios from "axios";
import "./Order.css";
import Post from "./Post.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  FaCartArrowDown,
  FaAngleLeft,
  FaRegCreditCard,
  FaRegCheckCircle,
} from "react-icons/fa";
import Card from "react-bootstrap/Card";

// npm install react-icons --save 설치해야함

const api = require("../../api.json");

const Order = (props) => {
  // localStorage에서 데이터 가져오기
  const [shoppingItem, setShoppingItem] = useState([]);
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("orderList")) || [];
    setShoppingItem(Items);
  }, []);

  // 계속 주문하기 버튼
  const homeClick = (e) => {
    window.location.href = "/categories";
  };

  // 주문 완료 버튼
  const orderClick = (e) => {
    window.location.href = "/order/complete";
  };

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  return (
    <div>
      <div className="icons">
        <FaCartArrowDown size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCreditCard className="orders" size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCheckCircle size="30px" color="#566270" />
      </div>
      <hr />
      <div className="names">
        <span>제품</span>
        <span>수량</span>
        <span>가격</span>
        <span>총금액</span>
      </div>
      <hr />
      <div>
        {/* 주문 상품 */}
        <div className="product">
          <div>
            <div className="product_d">
              {shoppingItem.map((el, index) => (
                <div key={el._id}>
                  <div className="carts">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="" />
                      <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>{el.price}</Card.Text>
                      </Card.Body>
                    </Card>
                    <div>
                      <Form.Group>
                        <Form.Control
                          id="modal_num"
                          type="number"
                          placeholder="1"
                          min="1"
                        />
                      </Form.Group>
                    </div>
                    <div>
                      <p>{el.price}</p>
                    </div>
                    <div>
                      <p>{el.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="totalPrice">
        <p>총 금액</p>
        <p>()</p>
      </div>
      <hr />
      <div className="input_user">
        <h2>배송정보 입력</h2>
        <hr />
        <div className="shipping">
          <Form.Group className="mb-1">
            <Form.Label>받으시는 분*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group>
            <Form.Label>핸드폰번호*</Form.Label>
            <div id="phone" className="mb-5">
              <Form.Select>
                <option></option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="019">019</option>
              </Form.Select>
              <p>-</p>
              <Form.Control type="text" placeholder="" />
              <p>-</p>
              <Form.Control type="text" placeholder="" />
            </div>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>이메일*</Form.Label>
            <div className="email">
              <Form.Control type="text" placeholder="" />
              <p>@</p>
              <Form.Control type="text" placeholder="gmail.com" />
            </div>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>배송 메세지</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>주소</Form.Label>
            <div id="address_search">
              <Form.Control
                className="user_enroll_text"
                placeholder="주소"
                type="text"
                required={true}
                name="address"
                onChange={handleInput}
                value={enroll_company.address}
              />
              <button onClick={handleComplete}>우편번호 찾기</button>
            </div>

            {popup && (
              <Post
                company={enroll_company}
                setcompany={setEnroll_company}
              ></Post>
            )}
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>나머지 주소*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group>
            <Form.Label>생년월일*</Form.Label>
            <div className="brithday">
              <Form.Control type="text" placeholder="" />
              <p>년</p>
              <Form.Control type="text" placeholder="" />
              <p>월</p>
              <Form.Control type="text" placeholder="" />
              <p>일</p>
            </div>
          </Form.Group>
        </div>
        <div className="last_order">
          <Button onClick={orderClick} size="lg">
            주문하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
