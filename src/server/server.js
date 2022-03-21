import express from "express";
import ReactDOMServer from "react-dom/server";
import SSRProvider from "react-bootstrap/SSRProvider";

import App from "../components/App.js";

const server = express();
server.use(express.static("dist"));

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
      <body class='container p-3 my-3 bg-dark text-white'>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(4242, () => console.log("Server is running..."));
