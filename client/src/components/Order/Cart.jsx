import { React, useState, useRef, useEffect } from "react";
import "./Cart.css";
import "../Categories/Wine.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {
  FaShoppingCart,
  FaAngleLeft,
  FaRegCreditCard,
  FaRegCheckCircle,
} from "react-icons/fa";

const Cart = () => {
  const counterRef = useRef;

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

  const handleClickOrder = (clikData) => {
    const addOrder = [];
    const getOrder = JSON.parse(localStorage.getItem("orderList"));

    getOrder?.map((localstorageData) => {
      addOrder.push(localstorageData);
    });
    addOrder.push(clikData);
    localStorage.setItem("orderList", JSON.stringify(addOrder));
  };

  return (
    <div>
      {/* 아이콘들 */}
      <div className="icons">
        <FaShoppingCart className="shoppingcart" size="30px" color="#6c49b8" />
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
            <div className="names">
              <span>제품</span>
              <span>수량</span>
              <span>가격</span>
              <span>총금액</span>
            </div>

            <hr />
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
                          // ref={counterRef}
                          id="modal_num"
                          type="number"
                          placeholder={el.count}
                          min="1"
                        />
                      </Form.Group>
                    </div>
                    <div>
                      <p>{el.price}</p>
                    </div>
                    <div>
                      <p>{el.count * el.price}</p>
                    </div>
                    <div></div>
                  </div>
                  <Button
                    onClick={() => {
                      handleClickOrder(el);
                    }}
                    variant="outline-secondary"
                  >
                    선택상품 주문
                  </Button>
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
            전체상품 주문
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
