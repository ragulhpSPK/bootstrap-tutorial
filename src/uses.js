import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "./assets/download.jpg";

function Uses() {
  return (
    <Container>
      {/* Headings */}
      <h1>Hello</h1>
      <h3>Hello</h3>
      <p>Hello</p>
      <p className="h1">Hello</p>
      {/* display Headings */}
      {/* 1....5 */}
      <p className="display-1">hello</p>
      <p className="display-5">hello</p>
      {/* lead and muted text */}
      <p>lorem hi hello i am lorem from chennai...</p>
      <p className="lead text-muted">
        lorem hi hello i am lorem from chennai...
      </p>
      <p className="lead text-muted">Hello</p>
      {/* Text alignment */}
      <h3 className="display-5 text-start">Hello world</h3>
      <h3 className="display-5 text-center">Hello world</h3>
      <h3 className="display-5 text-end">Hello world</h3>
      {/* Text transform */}
      <p className="text-capitalize">
        lorem hi hello i am lorem from chennai...
      </p>
      <p className="text-uppercase">
        lorem hi hello i am lorem from chennai...
      </p>
      <p className="text-lowercase">
        lorem hi hello i am lorem from chennai...
      </p>
      {/* Font size */}
      {/* 1....6 */}
      <h1 className="fs-6">hello</h1>
      <h1 className="fs-1">hello</h1>
      {/* font weight and styles */}
      <h1 className="fw-bold">hello</h1>
      <h1 className="fst-italic">hello</h1>
      {/* text decoration */}
      <h1 className="text-decoration-underline">hello</h1>
      <a href="s" className="text-decoration-none">
        Hello
      </a>
      <Image src={Logo} alt="no image" fluid roundedCircle></Image>
      <Image src={Logo} alt="no image" fluid thumbnail></Image>
      {/* fluid */} it use for responsive image
    </Container>
  );
}

export default Uses;
