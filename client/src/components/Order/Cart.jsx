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

  // check box
  const [checkedList, setCheckedList] = useState([]);

  // 전체 체크 클릭 시 발생하는 함수 //
  // const onCheckedAll = useCallback(
  //   (checked) => {
  //     if (checked) {
  //       const checkedListArray = [];

  //       Items.forEach((list) => checkedListArray.push(list.id));

  //       setCheckedList(checkedListArray);
  //     } else {
  //       setCheckedList([]);
  //     }
  //   },
  //   [Items]
  // );

  // 개별 체크 클릭 시 발생하는 함수 //
  // const onCheckedElement = useCallback(
  //   (checked, list) => {
  //     if (checked) {
  //       setCheckedList([...checkedList, list]);
  //     } else {
  //       setCheckedList(checkedList.filter((el) => el !== list));
  //     }
  //   },
  //   [checkedList]
  // );

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
            {/* <input
              type="checkbox"
              onChange={(e) => onCheckedAll(e.target.checked)}
              checked={
                checkedList.length === 0
                  ? false
                  : checkedList.length === Items.length
                  ? true
                  : false
              }
            />
            {Items.map((list) => {
              <input
                key={list.id}
                type="checkbox"
                onChange={(e) => onCheckedElement(e.target.checked, list)}
                checked={checkedList.includes(list) ? true : false}
              />;
            })} */}
          </div>
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
                      <p>1</p>
                    </div>
                    <div>
                      <p>{el.price}</p>
                    </div>
                    <div>
                      <p>{el.price * 2}</p>
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
