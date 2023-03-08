import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p>Are you sure want to add a product in cart</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Yes</Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Mobilecards() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card className="m-3">
        <Card.Img
          variant="top"
          src={require("../assets/redmi.jpg")}
          height="500px"
          style={{ objectFit: "contain", marginTop: "30px" }}
        />
        <Card.Body>
          <Card.Title>Redmi Note 12 pro</Card.Title>
          <Card.Text>Price:24999</Card.Text>
          <div className="text-center">
            <Button
              variant="primary"
              className="m-4"
              onClick={() => setModalShow(true)}
            >
              Add to cart
            </Button>
            <Button variant="primary" className=" ps-3 pe-3">
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Mobilecards;
