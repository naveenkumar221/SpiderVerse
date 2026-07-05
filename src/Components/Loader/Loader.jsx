import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <img
        src="/images/spider.png"
        alt="Spider"
        className="loader-logo"
      />

      <h1>SpiderVerse</h1>

      <div className="loading-bar">
        <div className="loading-fill"></div>
      </div>

    </div>
  );
}

export default Loader;