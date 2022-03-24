import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Row style={{ minHeight: "1000px" }}>
        <Col xxl={6}>
          <Row className="makeMeSticky">
            <div>
              This is a sample stateful and server-side rendered React
              application.
              <br />
              <br />
              Here is a button that will track how many times you click it:
              <br />
              <br />
              <Button onClick={() => setCount(count + 1)}>{count}</Button>
            </div>
          </Row>
        </Col>
        <Col xxl={6}>
          <div>This is a test of 2 sides</div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
