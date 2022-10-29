/*
 * @Author: KazooTTT wangyijin1999@qq.com
 * @Date: 2022-10-18 00:34:44
 * @LastEditors: KazooTTT wangyijin1999@qq.com
 * @LastEditTime: 2022-10-29 14:36:55
 * @FilePath: /ssr-server-study/src/pages/Demo/index.tsx
 * @Description:
 */
import { FC, Fragment } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getDemoData } from "./store/demoReducer";

interface IProps {
  content?: string;
  getDemoData?: (data: string) => void;
}

const Demo: FC<IProps> = (data) => {
  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染框架 - DEMO</title>
        <meta name="description" content="服务器端渲染框架"></meta>
      </Helmet>
      <div>
        <h1>{data.content}</h1>
        <button
          onClick={(): void => {
            console.log("click the refresh button");
            data.getDemoData && data.getDemoData("刷新过后的数据");
          }}
        >
          刷新
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  // 将对应reducer的内容透传回dom
  return {
    content: state?.demo?.content,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getDemoData: (data: string) => {
      dispatch(getDemoData(data));
    },
  };
};

const storeDemo: any = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default storeDemo;
