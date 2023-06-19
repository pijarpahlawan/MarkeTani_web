import { useState } from "react";
import {
  Outlet,
  // useOutletContext,
  NavLink,
  Link,
} from "react-router-dom";
import { FaUser, FaCartArrowDown, FaHistory } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi";
import { logout } from "../api";
import style from "../assets/css/Account.module.css";

export default function Account() {
  // const { user } = useOutletContext();
  const [isSideCollapse, setIsSideCollapse] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <main
      className={`${style.main} ${isSideCollapse ? style["inactive"] : ""}`}
    >
      <aside className={style.sidebar}>
        <ul className={style.primaryMenus}>
          <li>
            <NavLink to="profile" state={{ isSideCollapse: isSideCollapse }}>
              <FaUser className={style.icon} />
              Akun Saya
            </NavLink>
            <ul>
              <li>
                <NavLink
                  to="profile"
                  state={{ isSideCollapse: isSideCollapse }}
                >
                  Profil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="password"
                  state={{ isSideCollapse: isSideCollapse }}
                >
                  Password
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="cart" state={{ isSideCollapse: isSideCollapse }}>
              <FaCartArrowDown className={style.icon} />
              Keranjang Saya
            </NavLink>
          </li>
          <li>
            <NavLink to="wishlist" state={{ isSideCollapse: isSideCollapse }}>
              <MdFavorite className={style.icon} />
              Produk Saya
            </NavLink>
          </li>
          <li>
            <NavLink to="history" state={{ isSideCollapse: isSideCollapse }}>
              <FaHistory className={style.icon} />
              Riwayat Pemesanan
            </NavLink>
          </li>
        </ul>
        <Link onClick={handleLogout} to="/" reloadDocument>
          Log Out
        </Link>
      </aside>
      <span
        onClick={() => {
          setIsSideCollapse(!isSideCollapse);
        }}
      >
        <HiChevronDoubleRight className={style.sideIcon} />
      </span>
      <Outlet
      // context={{ user }}
      />
    </main>
  );
}
