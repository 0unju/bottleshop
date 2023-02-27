import { React, useState, useEffect } from "react";
import Axios from "axios";
import "./Order.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  FaCartArrowDown,
  FaAngleLeft,
  FaRegCreditCard,
  FaRegCheckCircle,
} from "react-icons/fa";
import Card from "react-bootstrap/Card";

const api = require("../../API.json");

const Order = () => {
  const [dataList, setDataList] = useState(null);

  const getDate = async () => {
    const response = await Axios.get(api.orderList_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    getDate();
  }, []);

  let List = [];
  dataList?.forEach((data, index) => {
    List.push(
      <div>
        <Card style={{ width: "18rem", padding: "50px" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.product_id}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  const orderClick = (e) => {
    window.location.href = "/order/complete";
  };

  return (
    <div>
      <div className="icons">
        <FaCartArrowDown size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCreditCard size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCheckCircle size="30px" color="#566270" />
      </div>
      <hr />
      <div className="product">
        <Card style={{ width: "18rem", padding: "50px" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <h3>수량</h3>
        <h3>가격</h3>
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
            <div className="mb-5">
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
            <Form.Label>주소*</Form.Label>
            <div className="address">
              <Form.Control type="text" placeholder="" />
              <Button variant="success">우편번호</Button>
            </div>
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
