import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>简易的服务器端渲染 - HOME</title>
        <meta name="description" content="服务器端渲染"></meta>
      </Helmet>
      <div>
        <h1>hello ssr</h1>
        <div>
          <a href="http://127.0.0.1:3000/demo">链接跳转(客户端渲染)</a>
        </div>
        <button
          onClick={(): void => {
            navigate("/demo");
          }}
        >
          路由跳转(服务端渲染)
        </button>
      </div>
    </>
  );
};

export default Home;
