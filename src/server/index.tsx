import express from "express";
import childProcess from "child_process";
import Home from "@/pages/Home/index";
import { renderToString } from "react-dom/server";
import path from "path";

const port = 3000;
const url = "http://localhost:" + port;

const content = renderToString(<Home></Home>);
const html = `
<html>
  <body>
  <div id='root'>${content}</div>
  <script src="/index.js"></script>
  </body>
</html>
`;

const app = express();
app.use(express.static(path.resolve(process.cwd(), "client_build")));
app.get("*", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log("hello-ssr is running on " + url);
});

childProcess.exec(`start ${url}`);
