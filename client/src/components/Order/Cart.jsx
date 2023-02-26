import { React, useState } from "react";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {
  FaCartArrowDown,
  FaAngleLeft,
  FaRegCreditCard,
  FaRegCheckCircle,
} from "react-icons/fa";

const Cart = () => {
  {
    /* home으로 가기 */
  }
  const homeClick = (e) => {
    window.location.href = "/categories";
  };

  const orderClick = (e) => {
    window.location.href = "/order/order";
  };

  return (
    <div>
      {/* 아이콘들 */}
      <div className="icons">
        <FaCartArrowDown size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCreditCard size="30px" color="#566270" />
        <FaAngleLeft size="30px" color="#566270" />
        <FaRegCheckCircle size="30px" color="#566270" />
      </div>
      <hr />
      <div>
        {/* 주문 상품 */}
        <div className="product">
          <div>
            <Form.Check aria-label="option 1" />
          </div>
          <div className="product_d">
            <Card style={{ width: "18rem", padding: "50px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="counter">
            <Form.Group className="mb-1">
              <Form.Label>수량</Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group>
          </div>
          <div>가격</div>
        </div>
      </div>
      <hr />
      <div className="click_button">
        <div>
          <Button onClick={homeClick} variant="outline-secondary">
            계속 쇼핑하기
          </Button>
        </div>
        <div>
          <Button onClick={orderClick} variant="outline-secondary">
            선택상품 주문
          </Button>
        </div>
        <div>
          <Button onClick={orderClick} variant="outline-secondary">
            전체상품 주문
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
