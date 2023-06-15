import style from '../assets/css/Stock.module.css'
export default function Wishlist() {
  return (<section><div>
  <h1>Gudang Saya</h1>
  <br/>
  <article>
      <img src="" alt=""/>
      <div>
      <h2>Produk</h2>
      <br/><br/>
      <p>harga</p>
      <p>stock</p>
      <br/><br/>
      <div>
          <button>edit</button>
          <button>hapus</button>
      </div>

  </div>
  </article>
  <button className={style.tambah}>tambah barang</button>
</div>
</section>);
}
