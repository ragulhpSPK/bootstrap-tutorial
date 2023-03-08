import { Col, Container, Row } from "react-bootstrap";
import Mobilecards from "./mobilecards";
import React, { useState } from "react";

function Products() {
  const [products] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id="product" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-5 py-5">
            Let's Find a Mobile For You <i class="bi bi-phone"></i>
          </h3>
        </div>

        <Row>
          {products.map((item) => {
            console.log(item);
            return (
              <Col md={6} lg={4} key={item}>
                <Mobilecards />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Products;
