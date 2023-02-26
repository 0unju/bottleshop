import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import ReactPaginate from "react-paginate";
import winemain from "../images/winebenner.png";
import NpmPagination from "./Pagination";
import LOUISLATOURSANTENAY from "../images/red wine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "../images/red wine/GALANTAS.png";
import SANTACRISTINABRUT from "../images/sparklingwine/SANTA CRISTINA BRUT.png";
import ARRASBLANCDEBLANCNV from "../images/sparklingwine/ARRAS BLANC DE BLANC NV.png";
import CHATEAUBONNETWHITE from "../images/white wine/CHATEAU BONNET WHITE.png";

const api = require("../../api.json");

const Wine = () => {
  const cartClick = (e) => {
    window.location.href = "/order/cart";
  };

  const orderClick = (e) => {
    window.location.href = "/order/order";
  };

  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.products);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let list = [];
  dataList?.forEach((data, index) => {
    if (data.type === "Wine") {
      list.push(
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.price}</Card.Text>
              <button
                onClick={cartClick}
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
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
              <button
                type="button"
                onClick={cartClick}
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
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
                onClick={cartClick}
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SANTACRISTINABRUT} />
            <Card.Body>
              <Card.Title>SANTA CRISTINA BRUT</Card.Title>
              <Card.Text>33,000원</Card.Text>
              <button
                onClick={cartClick}
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ARRASBLANCDEBLANCNV} />
            <Card.Body>
              <Card.Title>ARRASBLANCDEBLANCNV </Card.Title>
              <Card.Text>52,000원</Card.Text>
              <button
                onClick={cartClick}
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={CHATEAUBONNETWHITE} />
            <Card.Body>
              <Card.Title>CHATEAU BONNET WHITE</Card.Title>
              <Card.Text>65,000원</Card.Text>
              <button
                onClick={cartClick}
                type="button"
                class="btn btn-outline-info"
              >
                장바구니
              </button>
              <button
                onClick={orderClick}
                type="button"
                class="btn btn-outline-success"
              >
                주문하기
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr />
      <h3 className="wine_text">Wine</h3>
      <div className="wine_list">{list}</div>
      {/* wine페이지 다음페이지 넘기는 것. */}
      <div className="page_go">
        <ReactPaginate>{NpmPagination}</ReactPaginate>
      </div>
    </>
  );
};

export default Wine;
