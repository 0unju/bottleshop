import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cheeses.css";
import Cheesesmain from "../images/cheesebenner.png";

import Card from "react-bootstrap/Card";

const Cheeses = () => {
  const cartClick = (e) => {
    window.location.href = "/order/cart";
  };

  const orderClick = (e) => {
    window.location.href = "/order/order";
  };

  const api = require("../../api.json");

  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.products_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let list = [];
  dataList?.forEach((data, index) => {
    if (data.type === "cheese") {
      const handleClickCart = (clikData) => {
        const addCart = [];
        const getCart = JSON.parse(localStorage.getItem("cartList"));
        getCart?.map((localstorageData) => {
          addCart.push(localstorageData);
        });

        addCart.push(clikData);
        localStorage.setItem("cartList", JSON.stringify(addCart));
      };
      list.push(
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.price}</Card.Text>
              <button
                onClick={() => {
                  handleClickCart(data);
                }}
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
      <div className="cheese_img">
        <img src={Cheesesmain} />h{" "}
      </div>
      <h3 className="cheeses_text">Best Cheeses</h3>
      <div className="best_cheeses">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
      <h3 className="cheeses_text">Cheeses</h3>
      <div>
        <div className="cheeses_list">{list}</div>
      </div>
    </>
  );
};

export default Cheeses;
