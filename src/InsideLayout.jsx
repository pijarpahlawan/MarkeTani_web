import { Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "./components/Logo";
import style from "./assets/css/InsideLayout.module.css";
import { IconContext } from "react-icons";

function InsideLayout() {
  return (
    <>
      <div className={style.navbar}>
        <Logo href="" />
        <form className={style.search}>
          <IconContext.Provider value={{ className: style.searchIcon }}>
            <FaSearch />
          </IconContext.Provider>
          <input
            type="search"
            name="q"
            id="q"
            placeholder="Cari di Marketani"
          />
        </form>
        <img className={style.avatar} src="./trump.jpg" alt="avatar" />
      </div>
      <Outlet />
    </>
  );
}

export default InsideLayout;
