import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Logo from "./assets/download.jpg";

function App() {
  return (
    <Container fluid>
      {/* Basic grid */}

      {/* Fluid Grid */}

      {/* fluid grid with Breakpoints */}

      {/* auto layout columns */}

      <Row>
        <Col className="text-bg-primary border" md={6}>
          column 6
        </Col>
        <Col className="text-bg-primary border">Grid</Col>
        <Col className="text-bg-primary border">Grid</Col>
      </Row>
      <Row>
        <Col className="text-bg-secondary border" md={5}>
          column 6
        </Col>
        <Col className="text-bg-secondary border">Grid</Col>
        <Col className="text-bg-secondary border">Grid</Col>
      </Row>

      {/* setting one column width */}

      <Row className="justify-content-md-center">
        <Col xs lg="2" className="text-bg-primary border">
          1 of 3
        </Col>
        <Col md="auto" className="text-bg-primary border">
          Variable width content
        </Col>
        <Col xs lg="2" className="text-bg-primary border">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col className="text-bg-primary border">1 of 3</Col>
        <Col md="auto" className="text-bg-primary border">
          Variable width content
        </Col>
        <Col xs lg="2" className="text-bg-primary border">
          3 of 3
        </Col>
      </Row>

      {/* Responsive grid */}

      <Row className="mt-5">
        <Col sm={8} className="text-bg-primary border">
          sm=8
        </Col>
        <Col sm={4} className="text-bg-primary border">
          sm=4
        </Col>
      </Row>
      <Row>
        <Col sm className="text-bg-primary border">
          sm=true
        </Col>
        <Col sm className="text-bg-primary border">
          sm=true
        </Col>
        <Col sm className="text-bg-primary border">
          sm=true
        </Col>
      </Row>

      {/* big Responsive page */}

      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8} className="text-bg-primary border">
          xs=12 md=8
        </Col>
        <Col xs={6} md={4} className="text-bg-primary border">
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="mt-5">
        <Col xs={6} md={4} className="text-bg-primary border">
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="text-bg-primary border">
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="text-bg-primary border">
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6} className="text-bg-primary border">
          xs=6
        </Col>
        <Col xs={6} className="text-bg-primary border">
          xs=6
        </Col>
      </Row>

      {/* Define size for row */}
      <Row md={4} className="mt-5">
        <Col className="text-bg-primary border">1 of 3</Col>
        <Col xs={6} className="text-bg-primary border">
          2 of 3
        </Col>
        <Col className="text-bg-primary border">3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
