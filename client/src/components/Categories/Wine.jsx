import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "../images/winebenner.png";
import { Pagination } from "react-bootstrap";
import LOUISLATOURSANTENAY from "../images/red wine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "../images/red wine/GALANTAS.png";
import SANTACRISTINABRUT from "../images/sparklingwine/SANTA CRISTINA BRUT.png";
import ARRASBLANCDEBLANCNV from "../images/sparklingwine/ARRAS BLANC DE BLANC NV.png";
import CHATEAUBONNETWHITE from "../images/white wine/CHATEAU BONNET WHITE.png";

const api = require("../../API.json");

const Wine = () => {
  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.products_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
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
        console.log(addCart);
        console.log(getCart);

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
      <div className="best_wine">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={LOUISLATOURSANTENAY} />
            <Card.Body>
              <Card.Title>LOUIS LATOUR SANTENAY</Card.Title>
              <Card.Text>75,000원</Card.Text>
              <Link to="/cart" type="button" class="btn btn-outline-info">
                장바구니
              </Link>

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
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={GALANTAS} />
            <Card.Body>
              <Card.Title>GALANTAS</Card.Title>
              <Card.Text>75,000원</Card.Text>
              <button
                to="/order/cart"
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
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
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SANTACRISTINABRUT} />
            <Card.Body>
              <Card.Title>SANTA CRISTINA BRUT</Card.Title>
              <Card.Text>33,000원</Card.Text>
              <Link to="/order/cart" type="button" class="btn btn-outline-info">
                장바구니
              </Link>
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
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ARRASBLANCDEBLANCNV} />
            <Card.Body>
              <Card.Title>ARRASBLANCDEBLANCNV </Card.Title>
              <Card.Text>52,000원</Card.Text>
              <Link to="/order/cart" type="button" class="btn btn-outline-info">
                장바구니
              </Link>
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
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={CHATEAUBONNETWHITE} />
            <Card.Body>
              <Card.Title>CHATEAU BONNET WHITE</Card.Title>
              <Card.Text>65,000원</Card.Text>
              <Link to="/order/cart" type="button" class="btn btn-outline-info">
                장바구니
              </Link>
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
      </div>
      <hr />
      <h3 className="wine_text">Wine</h3>
      <div className="wine_list">{list}</div>
      {/* wine페이지 다음페이지 넘기는 것. */}

      <Pagination>{items}</Pagination>
    </>
  );
};

export default Wine;
