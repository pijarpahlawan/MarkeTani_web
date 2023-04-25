import { navBar, navList, hamburger } from "../../assets/css/Home.module.css";

function Home() {
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

  return (
    <>
      <nav className={navBar}>
        <div className="navBrand">
          <a href="#">
            <h1>
              <span>M</span>arke<span>T</span>ani
            </h1>
          </a>
        </div>
        <div className={navList}>
          <span className={hamburger}>
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
