import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import phone from "../assets/redmi.jpg";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Bestoffers() {
  const [show, setShow] = useState(false);

  return (
    <section id="best" className="mb-5">
      <div className="text-center my-5 py-3">
        <h2
          className="display-5"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <i className="bi bi-search-heart text-primary"></i>
          Best offer of a Week
        </h2>
      </div>
      <Container>
        <Row
          className="align-items-center"
          data-aos="zoom-out-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Col md={7}>
            <Image
              src={phone}
              fluid={true}
              alt="no image found"
              rounded
            ></Image>
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2>Redmi note 12 pro</h2>
              <p className="text-decoration-line-through fs-6">
                price:Rs.24999
              </p>
              <h1>
                Special offer:
                <br />
                <p>price:Rs.23999</p>
              </h1>
              <p>Best offers Rs.5000 discouts for Hdfc credit card users</p>
              <p>Best offers Rs.3000 discouts for Axis credit card users</p>
              <p>Best offers Rs.2000 discouts for IOB credit card users</p>
              <Button
                className="text-bg-primary ps-2 pe-2"
                onClick={() => setShow(true)}
              >
                <i class="bi bi-basket-fill m-2"></i>Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className=" position-fixed bottom-0 end-0 p-3"
          position={"bottom-end"}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              {/* <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>
              Are you sure to Buy these amazing offer product
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
}

export default Bestoffers;
