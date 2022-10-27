/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-18 00:34:45
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-27 20:03:04
 * @FilePath: /ssr-server-study/src/server/index.tsx
 * @Description:
 */
import express from "express";
import childProcess from "child_process";
import { renderToString } from "react-dom/server";
import path from "path";
import router from "@/router";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { serverStore } from "@/store";

const app = express();

const bodyParser = require("body-parser");

// 静态资源路径
const staticPath = path.join(path.resolve(process.cwd(), "client_build"));
app.use(express.static(staticPath));

// 请求body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 启一个post服务
app.post("/api/getDemoData", (req, res) => {
  res.send({
    data: req.body,
    status_code: 0,
  });
});

app.get("*", (req, res) => {
  const content = renderToString(
    <Provider store={serverStore}>
      <StaticRouter location={req.path}>
        <Routes>
          {router?.map((item, index) => {
            return <Route {...item} key={index} />;
          })}
        </Routes>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  res.send(`
    <html
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("start http://127.0.0.1:3000");
});

childProcess.exec("start http://127.0.0.1:3000");
