import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Testimonials = () => {
  const [count, setCount] = useState(0);
  const testText = `Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.  
  Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.  
  Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.  
  Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.  
  Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.  
  Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.
  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox o
  n the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, 
  you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.`;
  return (
    <>
      <Row id="testimonials" style={{ minHeight: "1000px" }}>
        <Col xxl={6}>
          <Row style={{ minHeight: "800px" }} className="testimonials">
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
          <div>{testText}</div>
        </Col>
      </Row>
    </>
  );
};

export default Testimonials;
