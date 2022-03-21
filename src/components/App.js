import { useState } from "react";
import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <div className="col-xs-12">
        This is a sample stateful and server-side rendered React application.
        <br />
        <br />
        Here is a button that will track how many times you click it:
        <br />
        <br />
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </div>
    </div>
  );
}
