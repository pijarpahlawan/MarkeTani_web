import { Outlet, useOutletContext, NavLink, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaUser, FaCartArrowDown, FaHistory } from "react-icons/fa";
import { logout } from "../api";
import style from "../assets/css/Profile.module.css";

export default function Profile() {
  const { user } = useOutletContext();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <aside className={style.sideBar}>
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
      <Outlet context={{ user }} />
    </>
  );
}
