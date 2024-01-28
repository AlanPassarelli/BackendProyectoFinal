import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <main>
      </main>
      <section className="some-products">
        <Container>
          <h1 className="some-products-title">Nuestros productos</h1>
          <Row className="text-center mt-3 mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./Catan.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./Caverna.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./Bitoku.jpg" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="text-center mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./el-erudito2-0ff9123ad9329bd6dd16488471344672-320-0.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./juego-de-mesa-cultura-general-atenea1-9a6314f8c773a1195316488472548259-320-0.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./juego-de-mesa-de-cine-el-cinefilo-tapa1-a37d860c5cc218d90b16488469773441-320-0.jpg" alt="" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <img src="./slide6.jpg" className="img-fluid" alt="" />
          </Row>
          <Row className="text-center mt-3 mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./saboteur.png" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./PiramidedelSol.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./Musa.jpg" alt="" className="img-fluid" />
            </Col>
          </Row>

          <Row className="text-center mt-3 mb-3">
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./esquinados1-b66b5e9d013ca38b5916577253834697-320-0.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./juego-de-mesa-memoria-el-camarero1-0497f84be7fc29912416488469544373-320-0.jpg" alt="" className="img-fluid" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src="./melomano11-8c2ca6e92b7e402b7916630987457730-320-0.jpg" alt="" className="img-fluid" />
            </Col>
          </Row>
          

          <Row>
            <img src="./juegos-de-mesa.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
