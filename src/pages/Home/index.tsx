import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>hello ssr</h1>
      <div>
        <a href="http://127.0.0.1:3000/demo">链接跳转</a>
      </div>
      <button
        onClick={(): void => {
          navigate("/demo");
        }}
      >
        路由跳转
      </button>
    </div>
  );
};

export default Home;
