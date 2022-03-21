import ReactDOM from "react-dom";

import App from "./components/App.js";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("mountNode");
ReactDOM.hydrate(<App />, container);
