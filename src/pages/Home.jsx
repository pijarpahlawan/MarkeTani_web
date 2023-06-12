
import style from '../assets/css/DetailProduct.module.css'
import { FaCartArrowDown } from "react-icons/fa";
export default function Home() {
  return (<main>
    <body>
    <img src="/product.png" alt=""/>
    <br/><br/><br/>  
    <b>Nama Barang</b>

    <p>detail barang </p>

    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/> 
    <br/><br/>

    <b>Rp 1.000.000</b>

    <br/><br /><br />
    <a href="">
    <button type="button" onclick="keranjang()" class="btn">
        <FaCartArrowDown className={style.lg} />
    </button>
    </a>
    <br /><br /><br /><br />

    <div>
        <main className={style.grid}>
                <article onclick="saran1()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran2()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran3()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran4()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran5()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran6()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
                <article onclick="saran7()" className={style.box1}>
                    <img className={style.mgbox1} src="/product.png" alt=""/>
                    <h2>Nama Barang</h2>
                    <p className={style.p2}>penjelasan singkat tentang barang di atas</p>
                    <h3>1XXXXXX</h3>
                </article>
        </main>
    </div>
    {/* <script>
        function favorit(){
            alert('Barang sudah ditambahkan ke Favorit');
        }
        function keranjang(){
            alert('Barang sudah ditambahkan ke Keranjang');
        }
        function saran1(){
            window.location.replace('')
        }
        function saran2(){
            window.location.replace('')
        }
        function saran3(){
            window.location.replace('')
        }
        function saran4(){
            window.location.replace('')
        }
        function saran5(){
            window.location.replace('')
        }
        function saran6(){
            window.location.replace('')
        }
        function saran7(){
            window.location.replace('')
        }
    </script> */}
        
</body>
</main>); 
  
}
