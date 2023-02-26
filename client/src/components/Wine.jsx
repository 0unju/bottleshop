//import React from 'react';
import React, { useState } from 'react';
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "./images/winebenner.png";
import Pagination from "./Pagination";
import LOUISLATOURSANTENAY from "./images/red wine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "./images/red wine/GALANTAS.png";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Wine = () => {
  const [show, setShow] = useState(false);
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
            <Card.Img variant="top" src={LOUISLATOURSANTENAY} onClick={setShow} />
            <Card.Body>
              <Card.Title onClick={setShow}>LOUIS LATOUR SANTENAY</Card.Title>
              <Card.Text>75,000원</Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>

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
                    <h3 id="wineName">14핸즈 카베르네소비뇽</h3>
                    <p>14Hands Cabernet Sauvignon</p>
                    <p>미국 워싱턴 와인의 상징, 포틴핸즈의 가성비 뛰어난 데일리 레드 와인으로 미국 프리미엄 까베르네 소비뇽 카테고리 ($8~$11) 중 판매 5위 (21년 기준)</p>
                    <p>27,000원</p>
                    <div class="modal_div3">
                      <h2>주문수량</h2>
                      <Form.Group className="mb-1">
                        <Form.Control type="number" placeholder="Number" />
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
      <div>
        {/* wine페이지 Wine 1번째줄 */}
        <div className="wine_list1">
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* wine페이지 Wine 2번째줄 */}
        <div className="wine_list2">
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* wine페이지 Wine 3번째줄 */}
        <div className="wine_list3">
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
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
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* wine페이지 다음페이지 넘기는 것. */}
      <div className="page_go">{Pagination}</div>
    </>
  );
};

export default Wine;
