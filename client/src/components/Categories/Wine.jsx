import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "../images/winebenner.png";
import { Pagination } from "react-bootstrap";
import LOUISLATOURSANTENAY from "../images/red wine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "../images/red wine/GALANTAS.png";

const api = require("../../API.json");

const Wine = () => {
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
    list.push(
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.price}</Card.Text>
            <button type="button" class="btn btn-outline-info">
              장바구니
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  });

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
                onClick={<carts />}
                class="btn btn-outline-info"
              >
                장바구니
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
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
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
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default Wine;
