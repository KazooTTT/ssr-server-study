/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-18 00:34:44
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-24 21:46:05
 * @FilePath: /ssr-server-study/src/pages/Demo/index.tsx
 * @Description:
 */
import { FC, useState, useEffect } from "react";
import axios from "axios";

const Demo: FC = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .post("/api/getDemoData", {
        content: "这是一个demo页面",
      })
      .then((res: any) => {
        setContent(res.data?.data?.content);
      });
  }, []);

  return <div>{content}</div>;
};

export default Demo;
