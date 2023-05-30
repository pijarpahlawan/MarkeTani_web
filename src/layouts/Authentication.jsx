import { Link, Outlet } from "react-router-dom";
import style from "../assets/css/Authentication.module.css";
import Logo from "../components/Logo";
import Brand from "../components/Brand";
import ErrorPopup from "../components/ErrorPopup";
import { useState } from "react";

export default function Authentication() {
  const [error, setError] = useState(null);

  return (
    <div className={style.authentication}>
      <Link to="/intro">
        <Logo extendedClass={style.extendedLogo} />
        <Brand extendedClass={style.extendedBrand} />
      </Link>
      {error && (
        <ErrorPopup message={error} closePopup={() => setError(null)} />
      )}
      <Outlet context={setError} />
    </div>
  );
}
