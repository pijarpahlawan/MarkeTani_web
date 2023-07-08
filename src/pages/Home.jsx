
import style from '../assets/css/Home.module.css'
import { FaCartArrowDown } from "react-icons/fa";
import Card from '../components/Card';
import { Router } from 'react-router-dom';
export default function Home() {
  return (<main>
    <section className={style.body}>
          <div className={style.atas}>
            {/* iklan diatas  */}
              contoh saja 
            <div className={style.kiri}>
              contoh saja
              {/* contoh saja */}
            </div>
          </div>
          <div className={style.bawah}>
            {/* iklan dibawah */}
            contoh saja
          </div>
    </section>
    <section className={style.footer}>
      {/* berisi footer */}
      contoh saja 
    </section>
      
    
</main>); 
  
}


