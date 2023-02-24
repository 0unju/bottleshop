import React from "react";
import Card from "react-bootstrap/Card";
import LOUISLATOURSANTENAY from "./images/redwine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "./images/redwine/GALANTAS.png";

const Best = () => {
  return (
    <>
      <div>
        <div className="wine_best">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={LOUISLATOURSANTENAY} />
            <Card.Body>
              <Card.Title>LOUIS LATOUR SANTENAY</Card.Title>
              <Card.Text>75,000원</Card.Text>
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
            <Card.Img variant="top" src={GALANTAS} />
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
    </>
  );
};

export default Best;
