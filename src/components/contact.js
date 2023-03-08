import React from "react";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  return (
    <section id="detail" className="bg-light mt-5">
      <div className="text-center my-5 py-3">
        <h2 className="display-5">
          Contact us for more details
          <i class="bi bi-chat-left-heart text-primary ms-2"></i>
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form className="py-5">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-open-heart"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email address">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-badge"></i>
                </InputGroup.Text>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter name here"
                >
                  <Form.Control type="name" placeholder="abc" />
                </FloatingLabel>
              </InputGroup>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Enter your message here"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
