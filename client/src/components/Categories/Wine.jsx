import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "../images/winebenner.png";
import { Pagination } from "react-bootstrap";
import BestWine from "./BestWine";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import LOUISLATOURSANTENAY from "../images/red wine/LOUIS LATOUR SANTENAY.png";

const api = require("../../api.json");

const Wine = () => {
  const [dataList, setDataList] = useState(null);

  const GetData = async () => {
    const response = await axios.get(api.products_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  // 리스트 만들기
  const dataList_length = dataList?.length;
  const page_number =
    dataList_length % 5 === 0
      ? parseInt(dataList_length / 5) - 1
      : parseInt(dataList_length / 5);

  let items = [];
  const [active, setActive] = useState(1);
  const page_onClick = (number) => setActive(number);

  for (let number = 1; number <= page_number + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          page_onClick(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // DB에서 데이터 가져와서 제품표기
  let list = [];
  const [show, setShow] = useState(false);
  dataList?.forEach((data, index) => {
    if (12 * (active - 1) <= index && index < 14 * active) {
      // localstorage에 제품데이더 넣기
      const handleClickCart = (clikData) => {
        const addCart = [];
        const getCart = JSON.parse(localStorage.getItem("cartList"));
        getCart?.map((localstorageData) => {
          addCart.push(localstorageData);
        });
        addCart.push(clikData);
        localStorage.setItem("cartList", JSON.stringify(addCart));
      };
      if (data.type === "Wine")
        list.push(
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img onClick={setShow} variant="top" src="" />
              <Card.Body>
                <Card.Title onClick={setShow}>{data.name}</Card.Title>
                <Card.Text>{data.price}</Card.Text>
                <div>
                  <button
                    onClick={() => {
                      handleClickCart(data);
                    }}
                    class="btn btn-outline-info"
                  >
                    장바구니
                  </button>
                </div>

                <Link
                  to="/order/order"
                  type="button"
                  class="btn btn-outline-success"
                >
                  주문하기
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
    }
  });

  return (
    <>
      {/* wine페이지 메인이미지 */}
      <div className="wine_img">
        <img src={winemain} alt="wineimg" />
      </div>
      {/* wine페이지 Best Wine이미지 */}
      <h3 className="wine_text">Best Wine</h3>
      <div>
        <div className="best_wine">
          <BestWine />
          <Modal
            id="Modal"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body class="modal_body">
              <div class="modal_div1">
                <img id="wineImg" src={LOUISLATOURSANTENAY} alt="modal_wine" />
              </div>
              <div class="modal_div2">
                <h3 id="wineName">LOUIS LATOUR SANTENAY</h3>
                <p id="wineEngname">14Hands Cabernet Sauvignon</p>
                <div>
                  <p id="wineDiscription">
                    미국 워싱턴 와인의 상징, 포틴핸즈의 가성비 뛰어난 데일리
                    레드 와인으로 미국 프리미엄 까베르네 소비뇽 카테고리
                    ($8~$11) 중 판매 5위 (21년 기준)
                  </p>
                </div>
                <p id="winePrice">75,000원</p>
                <div class="modal_div3">
                  <h3>주문수량</h3>
                  <Form.Group>
                    <Form.Control
                      id="modal_num"
                      type="number"
                      placeholder="0"
                      min="0"
                    />
                  </Form.Group>
                </div>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <hr />
      <h3 className="wine_text">Wine</h3>
      <div className="wine_list">{list}</div>
      {/* wine페이지 다음페이지 넘기는 것. */}

      <Pagination id="numbers">{items}</Pagination>
    </>
  );
};

export default Wine;
