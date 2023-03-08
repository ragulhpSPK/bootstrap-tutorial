import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Logo from "./assets/download.jpg";

function Color() {
  return (
    <Container>
      {/* Theme colors and usage */}
      <p className="text-bg-primary text-danger">Hello world</p>

      {/* light,dark and muted */}
      <p className="text-muted text-bg-dark">Hello world</p>

      {/* opacity */}
      {/* 25,50,75,100 */}
      <p className="text-black-50">Hello world</p>

      {/* --------------------------------------------------- */}

      {/* box model classes */}
      {/* padding */}
      {/* 0-- to remove 1...5 auto */}
      <p className="text-bg-warning p-5">Hello world</p>
      <p className="text-bg-warning p-1">Hello world</p>

      {/* t-top  b-bottom s-start e-end auto x-horizontal y-vertical*/}
      <p className="text-bg-warning pt-5">Hello world</p>
      <p className="text-bg-warning ps-5">Hello world</p>
      <p className="text-bg-warning px-5">Hello world</p>
      <p className="text-bg-warning py-5">Hello world</p>

      {/* remove */}

      <p className="text-bg-warning p-5 pt-0">Hello world</p>

      {/* margin */}
      {/* 0-- to remove 1...5 auto */}
      <p className="text-bg-warning p-5 m-5">Hello world</p>
      <p className="text-bg-warning m-5">Hello world</p>

      {/* t-top  b-bottom s-start e-end auto x-horizontal y-vertical*/}
      <p className="text-bg-warning mt-5">Hello world</p>
      <p className="text-bg-warning ms-5">Hello world</p>
      <p className="text-bg-warning mx-5">Hello world</p>
      <p className="text-bg-warning my-5">Hello world</p>
      <p className="text-bg-danger m-auto" style={{ width: "300px" }}>
        Hello world
      </p>

      {/* remove */}

      <p className="text-bg-warning m-5 mt-0">Hello world</p>

      {/* border */}
      {/* 0-- to remove 1...5 border */}
      <p className="text-bg-secondary border">Hello pop</p>

      {/* border width */}
      <p className="text-bg-secondary border border-3 border-danger border-bottom-0">
        Hello pop
      </p>

      {/* rounded pill and circle */}
      <p className="text-bg-secondary border rounded-circle">Hello pop</p>
      <p className="text-bg-secondary border rounded-pill">Hello pop</p>
    </Container>
  );
}

export default Color;
