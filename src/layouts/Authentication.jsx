import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Brand from "../components/Brand";
import style from "../assets/css/Authentication.module.css";

export default function Authentication() {
  return (
    <div className={style.authentication}>
      <Link to="/intro">
        <Logo extendedClass={style.extendedLogo} />
        <Brand extendedClass={style.extendedBrand} />
      </Link>
      <Outlet />
    </div>
  );
}
