import style from '../assets/css/History.module.css'

export default function History() {
  return (<section>  <div className={style.container}>
  <div className={style.image}>
    <img src="/cangkul.jpeg" alt="Gambar 1" width="250" height="200"/>
    <div className={style.detail}>
    <label className={style.produk}> Cangkul</label>
    <label className={style.harga}> Rp xxxxxx</label>
    <label className={style.stok}> Sisa Stok :</label>
    <div>      
      <button className={style.text}> Hapus</button>
    <button className={style.text}>keranjang</button>
   </div> 
    </div>
  </div>
  <div className={style.image}>
    <img src="/kiwi.jpeg" alt="Gambar 2" width="250" height="200"/>
    <div className={style.detail}>
      <label className={style.produk}> Buah Kiwi</label>
      <label className={style.harga}> Rp xxxxxx</label>
      <label className={style.stok}> Sisa Stok : </label>
      <div>      
        <button className={style.text}> Hapus</button>
      <button className={style.text}>keranjang</button>
     </div> 
      </div>
  </div>
  <div className={style.image}>
    <img src="/padi.jpeg" alt="Gambar 3" width="250" height="200"/>
    <div className={style.detail}>
      <label className={style.produk}> Tanaman Padi</label>
      <label className={style.harga}> Rp xxxxxx</label>
      <label className={style.stok}> Sisa Stok : </label>
<div>      
      <button className={style.text}> Hapus</button>
    <button className={style.text}>keranjang</button>
   </div> 
  </div>
  </div>
  <div className={style.image}>
    <img src="/pupuk.jpeg" alt="Gambar 4" width="250" height="200"/>
    <div className={style.detail}>
    <label className={style.produk}> Pupuk</label>
    <label className={style.harga}> Rp xxxxxx</label>
    <label className={style.stok}> Sisa Stok :</label>
    <div>      
      <button className={style.text}> Hapus</button>
    <button className={style.text}>keranjang</button>
   </div>
    </div>
  </div>
</div>
</section>);
}
