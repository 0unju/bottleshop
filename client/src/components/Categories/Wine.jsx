import React, { useState, useEffect, useRef } from "react";
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
  const countRef = useRef();
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
      ? parseInt(dataList_length / 12) - 1
      : parseInt(dataList_length / 12);

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
    if (4 * (active - 1) <= index && index < 5 * active) {
      // localstorage에 제품데이더 넣기
      const handleClickCart = (clikData) => {
        const addCart = [];
        const getCart = JSON.parse(localStorage.getItem("cartList"));
        getCart?.map((localstorageData) => {
          addCart.push(localstorageData);
        });
        addCart.push({ ...clikData, count: countRef.current.value });
        localStorage.setItem("cartList", JSON.stringify(addCart));
      };
      if (data.type === "Wine")
        list.push(
          <div>
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
                  <img
                    id="wineImg"
                    src={LOUISLATOURSANTENAY}
                    alt="modal_wine"
                  />
                </div>
                <div class="modal_div2">
                  <h3 id="wineName">{data.name}</h3>
                  <hr />
                  <div>
                    <p id="wineDiscription">{data.description}</p>
                  </div>

                  <p id="winePrice">{data.price}</p>
                  <hr />
                  <div class="modal_div3">
                    <h3>주문수량</h3>
                    <Form.Group>
                      <Form.Control
                        ref={countRef}
                        id="modal_num"
                        type="number"
                        placeholder="0"
                        min="0"
                      />
                    </Form.Group>
                  </div>
                  <button
                    onClick={() => {
                      handleClickCart(data);
                    }}
                    class="btn btn-outline-info"
                  >
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <Card style={{ width: "18rem" }}>
              <Card.Img onClick={setShow} variant="top" src="" />
              <Card.Body>
                <Card.Title onClick={setShow}>{data.name}</Card.Title>
                <Card.Text>{data.price}</Card.Text>
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
