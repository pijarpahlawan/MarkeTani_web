import { Link, Outlet } from "react-router-dom";
import style from "../assets/css/Authentication.module.css";
import Logo from "../components/Logo";
import Brand from "../components/Brand";
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
