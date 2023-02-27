import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "../images/winebenner.png";
import { Pagination } from "react-bootstrap";
import BestWine from "./BestWine";

const api = require("../../API.json");

const Wine = () => {
  const [dataList, setDataList] = useState(null);

  const GetData = async () => {
    const response = await axios.get(api.products_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    GetData();
  }, []);

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

  let list = [];
  dataList?.forEach((data, index) => {
    if (5 * (active - 1) <= index && index < 14 * active) {
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
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
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
