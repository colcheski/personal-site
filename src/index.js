import ReactDOM from "react-dom";

import App from "./components/app";

const container = document.getElementById("mountNode");
ReactDOM.hydrate(<App />, container);
