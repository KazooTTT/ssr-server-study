import express from "express";
import childProcess from "child_process";
import Home from "@/pages/Home/index";
import { renderToString } from "react-dom/server";

const app = express();
const port = 3000;
const url = "http://localhost:" + port;

const content = renderToString(<Home></Home>);
const html = `
<html>
  <body>
  <div>${content}</div>
  </body>
</html>
`;

app.get("*", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log("hello-ssr is running on " + url);
});

childProcess.exec(`start ${url}`);
