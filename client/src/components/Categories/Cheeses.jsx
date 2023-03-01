import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cheeses.css";
import Cheesesmain from "../images/cheesebenner.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
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
  const [show, setShow] = useState(false);
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
            </Card.Body>
          </Card>

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
                  <img id="cheesesImg" src={data.image} alt="modal_cheeses" />
                </div>
                <div class="modal_div2">
                  <h3 id="cheeses">{data.name}</h3>
                  <hr />
                  <div>
                    <p id="cheesesDiscription">{data.description}</p>
                  </div>

                  <p id="cheesesPrice">{data.price}</p>
                  <hr />
                  <div class="modal_div3">
                    <h3>주문수량</h3>
                    <Form.Group>
                      <Form.Control
                        id="modal_num"
                        type="number"
                        placeholder="1"
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
              <Card.Img onClick={setShow} variant="top" src={data.image_path} />
              <Card.Body>
                <Card.Title onClick={setShow}>{data.name}</Card.Title>
                <Card.Text>{data.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className="cheese_img">
        <img src={Cheesesmain} />
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
