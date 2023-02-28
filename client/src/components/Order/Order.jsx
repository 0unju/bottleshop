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

const api = require("../../api.json");

const Order = () => {
  // localStorage에서 데이터 가져오기
  const [shoppingItem, setShoppingItem] = useState([]);
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("orderList")) || [];
    setShoppingItem(Items);
  }, []);

  const homeClick = (e) => {
    window.location.href = "/categories";
  };

  const orderClick = (e) => {
    window.location.href = "/order/complete";
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
      <div>
        <p>총 금액</p>
        <p>()</p>
      </div>
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

export default Order;
