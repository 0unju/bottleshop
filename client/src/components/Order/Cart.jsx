import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

// npm install react-icons --save 설치해야함

const Cart = () => {
  const counterRef = useRef;

  // localStorage에서 데이터 가져오기
  const [shoppingItem, setShoppingItem] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("cartList")) || [];
    setShoppingItem(Items);
  }, []);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

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

  let cartShooping = [];
  shoppingItem.forEach((el, index) =>
    cartShooping.push(
      <>
        <div key={el._id}>
          <div>
            <div className="carts">
              <div className="cartCheckbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChecked}
                />
              </div>
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
              <Button
                onClick={() => {
                  handleClickOrder(el);
                }}
                variant="outline-secondary"
              >
                상품 주문
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  );

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
              <span></span>
              <span>제품</span>
              <span>수량</span>
              <span>가격</span>
              <span>총금액</span>
            </div>
            <hr />
            <div>{cartShooping}</div>
            <hr />
            <div className="summitButton">
              <button className="summitCart">
                <Link to="/categories">계속 쇼핑하기</Link>
              </button>

              <button className="summitCart">
                <Link to="/order/order">전체상품 주문</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
