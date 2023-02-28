import { React, useState, useCallback, useEffect } from "react";
import "./Cart.css";
import "../Categories/Wine.jsx";
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
  // localStorage에서 데이터 가져오기
  const [shoppingItem, setShoppingItem] = useState([]);
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("cartList")) || [];
    setShoppingItem(Items);
  }, []);

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
        <FaCartArrowDown className="shoppingcart" size="30px" color="#566270" />
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
                      <p>{el.price * 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
