import { useRef } from "react";
import { Outlet, useOutletContext, NavLink, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaUser, FaCartArrowDown, FaHistory } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import { logout } from "../api";
import style from "../assets/css/Profile.module.css";

export default function Profile() {
  const { user } = useOutletContext();
  const sidebarElm = useRef(null);

  const handleLogout = async () => {
    await logout();
  };

  const sideToggle = () => {
    const thisElement = sidebarElm.current;
    thisElement.classList.toggle(style.inactive);
  };

  return (
    <main ref={sidebarElm} className={style.main}>
      <aside className={style.sidebar}>
        <ul className={style.primaryMenus}>
          <li>
            <NavLink to="profile">
              <IconContext.Provider value={{ className: style.icon }}>
                <FaUser />
              </IconContext.Provider>
              Akun Saya
            </NavLink>
            <ul>
              <li>
                <NavLink to="profile">Profil</NavLink>
              </li>
              <li>
                <NavLink to="password">Password</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="cart">
              <IconContext.Provider value={{ className: style.icon }}>
                <FaCartArrowDown />
              </IconContext.Provider>
              Keranjang Saya
            </NavLink>
          </li>
          <li>
            <NavLink to="history">
              <IconContext.Provider value={{ className: style.icon }}>
                <FaHistory />
              </IconContext.Provider>
              Riwayat Pemesanan
            </NavLink>
          </li>
        </ul>
        <Link onClick={handleLogout} to="/" reloadDocument>
          Log Out
        </Link>
      </aside>
      <IconContext.Provider value={{ className: style.sideIcon }}>
        <GoTriangleRight onClick={sideToggle} />
      </IconContext.Provider>
      <Outlet context={{ user }} />
    </main>
  );
}
