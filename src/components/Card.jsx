import placeholderPadi from "/padi.jpeg"
import style from "../assets/css/Home.module.css";


export default function Card() {
    const namaBarang = ['Padi','Cabe','Sawi','Pakcoy'].map(produk =>
        {
            <label htmlFor="">{produk}</label>
        })
    return (
      <div className={style.container}>
        <img src={placeholderPadi} alt="padi" />
        <label htmlFor="">{namaBarang}</label>
      </div>
    );
}