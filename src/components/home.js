import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/phone1.avif";
import image2 from "../assets/phone4.avif";
import image3 from "../assets/phone3.avif";

function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={7}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption className="text-dark">
                <h3>First slide label</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={image2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={image3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p className="d-none d-lg-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <h2 className="text-center mt-5 text-primary">
            Buy Mobiles online with specail offers
          </h2> */}
          <marquee
            width="80%"
            scrollamount="5"
            direction="right"
            className="text-center mt-5 text-primary fw-bold display-5"
            scrolldelay="10"
            style={{ fontSize: "35px", textAlign: "center" }}
            behavior="alternate"
          >
            Buy mobiles online with specail offers!
          </marquee>
          <p className="text-center lead text-muted fs-6">
            Enjoy well with new offers,Don't Miss it...
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
