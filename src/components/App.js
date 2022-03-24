import {
  //Tabs,
  //Tab,
  //Row,
  //Col,
  Container,
} from "react-bootstrap";
import Navigation from "./Navigation";
import Home from "./Home";
import Contact from "./Contact";

/* Original Working Structure */
/*<Container fluid>
<Row>
  <Col>
    <Tabs defaultActiveKey="home" id="tabs">
      <Tab eventKey="home" title="Home">
        <Home />
        <div>
          <span>Lets test this</span>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Contact />
      </Tab>
    </Tabs>
  </Col>
</Row>
</Container>*/

export default function App() {
  const boxHeight = {
    height: "5000px",
  };
  return (
    <>
      <Navigation />
      <div style={boxHeight}>
        <Container style={{ height: "1000px" }} fluid>
          <Home />
          <Contact />
        </Container>
      </div>
    </>
  );
}
