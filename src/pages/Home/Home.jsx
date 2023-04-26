import { useState, useRef } from "react";
import {
  navBar,
  navBrand,
  navList,
  hamburger,
  inactive,
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
          <a href="#">login</a>
        </div>
      </nav>
    </>
  );
}

export default Home;
