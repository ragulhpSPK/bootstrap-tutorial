import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Logo from "./assets/download.jpg";

function Breakpoints() {
  return (
    <>
      <Container>
        <div className="text-bg-primary">Hello</div>
      </Container>
      <Container fluid>
        <div className="text-bg-primary mt-3">Fluid</div>
      </Container>
      <Container fluid="md">
        <div className="text-bg-primary mt-3">Fluid</div>
      </Container>
    </>
  );
}

export default Breakpoints;
