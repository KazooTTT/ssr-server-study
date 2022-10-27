/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-27 20:00:59
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-27 20:01:12
 * @FilePath: /ssr-server-study/src/store/index.tsx
 * @Description:
 */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { demoReducer } from "@/pages/Demo/store";

const clientStore = configureStore({
  reducer: { demo: demoReducer.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const serverStore = configureStore({
  reducer: { demo: demoReducer.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export { clientStore, serverStore };
