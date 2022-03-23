import express from "express";
import ReactDOMServer from "react-dom/server";
import SSRProvider from "react-bootstrap/SSRProvider";
import App from "../components/App.js";

const favicon = require("serve-favicon");
const path = require("path");

const server = express();
server.use(express.static("dist"));
server.use(favicon(path.join(__dirname, "../images", "favicon.ico")));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(
    <SSRProvider>
      <App />
    </SSRProvider>
  );

  res.send(`
    <html>
      <head>
        <title>Chris Olcheski - Full Stack Developer</title>
      </head>
      <body class='p-3 my-3 bg-dark text-white'>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.get("/picture", (req, res) => {
  res.sendFile("/src/images/Me.jpg", { root: "." });
});

server.listen(4242, () => console.log("Server is running..."));
