import Item from "../components/Item";
import style from "../assets/css/Cart.module.css";
import MiniItem from "../components/MiniItem" 
//import { useOutletContext } from "react-router-dom";

export default function Cart() {
  // const { user } = useOutletContext();
  const totalBiaya =['Subtotal Untuk Produk', 'Subtotal Pengiriman'].map(biaya =>
    {
      return(
        <div>
          <label htmlFor="">{biaya}</label>
        </div>
      )
    })
  const option = ['Kota/Kabupaten', 'Province'].map(option => {
    return (
      <select name="" id="" className={style.option}>
        <option value={option}>{option}</option>
      </select>
    )
  })
  return (
    <section id="cart" className={style.cart}>
      <h2>Keranjang Saya</h2>
      <section className={style.body}>
      <section id="items" className={style.items}>
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
      <section className={style.delivery}>
        <section className={style.head}>
          <h1>Pemesanan</h1>
          {/* <p>{`${user.address}`}</p> */}
        </section>
        <section id="courier" className={style.courier}>
          <label htmlFor="">Pilih Lokasi Pengantaran Barang</label>
          <div>
            <label htmlFor="">Provinsi Kota : </label>
            {option}
          </div>
        </section>
        <section id="resume" className={style.courier}>
          <label htmlFor="">Barang Terpilih</label>
            <div>
              <MiniItem />
              <MiniItem />
            </div>
            <div className={style.TotalHarga}>
              <div className={style.kurir}>
                <label htmlFor="">Pilih Metode Pengiriman</label>
                <select name="" id="" className={style.option}>
                  <option value="Cargo">Cargo</option>
                </select>
                <label htmlFor="" className={style.hargaKurir}>Harga</label>
              </div>
              <div className={style.subHarga}>
                <div className={style.keterangan}>
                  <img src="" alt="" />
                  <label htmlFor="">Total Harga</label>
                </div>
              </div>
            </div>
            <button>Cekout</button>
        </section>
      </section>
      </section>
    </section>
  );
}
