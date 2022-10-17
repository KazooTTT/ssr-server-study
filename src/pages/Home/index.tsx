const Home = () => {
  return (
    <div>
      <h1>hello ssr</h1>
      <button
        onClick={(): void => {
          alert("hello-ssr");
        }}
      >
        click button
      </button>
    </div>
  );
};

export default Home;
