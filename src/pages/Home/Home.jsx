import { useState, useRef } from "react";
import {
  navBar,
  navBrand,
  navList,
  hamburger,
  inactive,
  hero,
} from "../../assets/css/Home.module.css";

function Home() {
  const [isNavListActive, setIsNavListActive] = useState(false);
  const hamburgerHandler = useRef(null);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ].map((link) => {
    return (
      <li key={link.title}>
        <a href={link.path}>{link.title}</a>
      </li>
    );
  });

  const navToggle = (isNavListActive) => {
    const thisElement = hamburgerHandler.current;
    setIsNavListActive(!isNavListActive);
    thisElement.classList.toggle(inactive);
  };

  return (
    <>
      <nav className={navBar}>
        <div className={navBrand}>
          <a href="#">
            <h1>
              <span>M</span>arke<span>T</span>ani
            </h1>
          </a>
        </div>
        <div ref={hamburgerHandler} className={`${navList} ${inactive}`}>
          <span
            onClick={() => navToggle(isNavListActive)}
            className={hamburger}
          >
            <span></span>
          </span>
          <ul>{navLinks}</ul>
          <a href="#" type="button">
            login
          </a>
        </div>
      </nav>
      <section className={hero}>
        <div>
          <h1>
            Memajukan Agricultural<span></span>
          </h1>
          <h1>
            Bersama<span></span>
          </h1>
          <h1>
            MarkeTani<span></span>
          </h1>
          <a href="#projects" type="button">
            Bergabung
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
