import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1  className="title has-text-centered">Cute Cat Image</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  if (props == null) {
       return <Loading />;
  }
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by1">
        <img  src={props.src} alt="cute cat!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages().then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages() {
    fetchImages().then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container ">
        </div>
      </section>
      <section className="section">
        <div className="container is-max-desktop">
        <Image src={urls} />
        </div>
      </section>
      <div>
        <p className="has-text-centered">更新すると画像を変更することができます。</p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer has-background-success">
      <div className="content has-text-centered">
        <p>cat image is retrieved from Randomcat API</p>
        <p>
          <a href="http://random.cat">Donate to Randomcat API</a>
        </p>
        <p>高野拓楽　5421053 日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;