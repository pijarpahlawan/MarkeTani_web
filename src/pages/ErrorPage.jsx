import style from "../assets/css/ErrorPage.module.css";

export default function ErrorPage() {
 return(
  <div className={style.errorContainer}>
  <div className={style.errorContent}>
    <h1 className={style.h1}>Oops!</h1>
    <p className={style.p}>Halaman yang Anda cari tidak ditemukan.</p>
  </div>
  </div>
 )
}
