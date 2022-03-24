import {
  //Tabs,
  //Tab,
  //Row,
  //Col,
  Container,
} from "react-bootstrap";
import Navigation from "./Navigation";
import Home from "./Home";
import Testimonials from "./Testimonials";
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
  return (
    <>
      <Navigation />
      <div className="contentSection">
        <Container style={{ height: "1000px" }} fluid>
          <Home />
          <Testimonials />
          <Contact />
        </Container>
      </div>
    </>
  );
}
