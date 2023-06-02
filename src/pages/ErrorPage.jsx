import style from "../assets/css/ErrorPage.module.css";
import Logo from "../components/Logo";

export default function ErrorPage() {
  return (
    <div className={style.errorPage}>
      <Logo extendedClass={style.extendedLogo} />
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
    </div>
  );
}
