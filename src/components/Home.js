import { useState } from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <div>
        This is a sample stateful and server-side rendered React application.
        <br />
        <br />
        Here is a button that will track how many times you click it:
        <br />
        <br />
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </div>
    </div>
  );
};

export default Home;
