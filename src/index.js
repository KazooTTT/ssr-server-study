const express = require("express");
const childProcess = require("child_process");

const app = express();
const port = 3000;
const url = "http://localhost:" + port;

const htmlTemplate = `
  <html>
    <body>
    <div>hello-ssr</div>
    </body>
  </html>
`;

app.get("*", (req, res) => {
  res.send(htmlTemplate);
});

app.listen(port, () => {
  console.log("hello-ssr is running on " + url);
});

childProcess.exec(`start ${url}`);
