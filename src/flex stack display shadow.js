import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Logo from "./assets/download.jpg";

function Flex() {
  return (
    <Container>
      {/* display */}
      <p className="m-2 p-3 text-bg-primary d-block">Display</p>
      <p className="m-2 p-3 text-bg-primary d-inline">Display</p>
      {/* hide and show */}
      <p className="m-2 p-3 text-bg-primary d-none">Hide</p>
      <p className="m-2 p-3 text-bg-primary d-block">Show</p>
      {/* flex */}
      <div className="d-flex flex-column">
        <p className="m-3 p-3 text-bg-primary">flex</p>
        <p className="m-3 p-3 text-bg-primary">flex</p>
        <p className="m-3 p-3 text-bg-primary">flex</p>
      </div>
      <div className="d-flex  flex-row-reverse">
        <p className="m-3 p-3 text-bg-primary w-50">flex</p>
        <p className="m-3 p-3 text-bg-primary w-50">flex</p>
        <p className="m-3 p-3 text-bg-primary w-50">flex</p>
      </div>
      <div className="d-flex flex-column align-items-end">
        <p className="m-3 p-3 text-bg-primary w-10 align-self-start">flex</p>
        <p className="m-3 p-3 text-bg-primary w-10">flex</p>
        <p className="m-3 p-3 text-bg-primary w-10">flex</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="m-3 p-3 text-bg-primary w-10">flex</p>
        <p className="m-3 p-3 text-bg-primary w-10">flex</p>
        <p className="m-3 p-3 text-bg-primary w-10">flex</p>
      </div>

      {/* stack */}

      <div className="vstack gap1 align-items-center">
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">Vstack</p>
      </div>
      <div className="hstack gap1 justify-content-center gap1">
        <p className="m-3 p-3 text-bg-secondary w-50">hstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">hstack</p>
        <p className="m-3 p-3 text-bg-secondary w-50">hstack</p>
      </div>

      {/* shadow */}
      <div className="shadow bg-light m-3 p-3">Shadow</div>
    </Container>
  );
}

export default Flex;
