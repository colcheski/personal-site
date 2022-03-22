import { useState } from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        //background: `linear-gradient(135deg, hsl(208, 36%, 46%, 0.65), hsl(208, 34%, 24%, 0.65)), url('/picture') no-repeat center / cover`,
        background: `linear-gradient(135deg, hsl(196, 76%, 31%, 0.35), 	hsl(175, 52%, 31%, 0.55)), url('/picture') no-repeat 40% 20% / cover`,
        //background: `linear-gradient(135deg, hsl(359, 100%, 65%, 0.45), 	hsl(50, 95%, 56%, 0.45)), url('/picture') no-repeat 40% 20% / cover`,
        objectFit: "contain",
        objectPosition: "-20% 0",
        // linearGradient: "(135deg, #4B79A1, #283E51)",
        // backgroundPosition: "center",
        // backgroundImage: "url('/picture')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        height: "100vh",
      }}
      //className="fixed-top"
    >
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
