//import { useState } from "react";
//import Button from "react-bootstrap/Button";
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
import Home from "./Home";
import Contact from "./Contact";
//import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Tabs defaultActiveKey="home" id="tabs">
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Contact />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
