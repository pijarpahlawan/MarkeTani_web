import { useState, useRef, useEffect } from "react";
import {
  navBar,
  navBrand,
  navList,
  hamburger,
  inactive,
  hero,
  about,
  contact,
  contactList,
  products,
  allProducts,
  productInfo,
  productImg,
} from "../../assets/css/Home.module.css";
import { address, email, phone, vegetable, seed, snack } from "./image";

function Home() {
  const [isNavListActive, setIsNavListActive] = useState(false);
  const [distanceScroll, setDistanceScroll] = useState(0); // [px]
  const navListElm = useRef(null);
  const navbarElm = useRef(null);
  const basedSection = useRef(null);

  const navLinks = [
    { title: "Home", path: "" },
    { title: "About", path: "about" },
    { title: "Products", path: "products" },
    { title: "Contact", path: "contact" },
  ].map((link) => {
    return (
      <li onClick={() => navToggle(isNavListActive)} key={link.title}>
        <a href={`#${link.path}`}>{link.title}</a>
      </li>
    );
  });

  const navToggle = (isNavListActive) => {
    const thisElement = navListElm.current;
    setIsNavListActive(!isNavListActive);
    thisElement.classList.toggle(inactive);
    console.log(window.location.hash);
  };

  useEffect(() => {
    const scrolled = () => {
      const target = navbarElm.current;
      const distance = basedSection.current.getBoundingClientRect().top;
      setDistanceScroll(distance);
      console.log(distanceScroll);
      if (distanceScroll <= 20) {
        target.style.backgroundColor = "#1f1f1fe6";
      } else {
        target.style.backgroundColor = "transparent";
      }
    };
    window.addEventListener("scroll", scrolled);
    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  }, [distanceScroll]);

  return (
    <>
      <nav ref={navbarElm} className={navBar}>
        <div className={navBrand}>
          <a href="#">
            <h1>
              <span>M</span>arke<span>T</span>ani
            </h1>
          </a>
        </div>
        <div ref={navListElm} className={`${navList} ${inactive}`}>
          <span
            onClick={() => navToggle(isNavListActive)}
            className={hamburger}
          >
            <span></span>
          </span>
          <ul>{navLinks}</ul>
          <a href="#" type="button">
            login
          </a>
        </div>
      </nav>
      <section className={hero}>
        <div>
          <h1>
            Memajukan Agrikultural<span></span>
          </h1>
          <h1>
            Bersama<span></span>
          </h1>
          <h1>
            MarkeTani<span></span>
          </h1>
          <a href="#projects" type="button">
            Bergabung<span></span>
          </a>
        </div>
      </section>
      <section id="about" ref={basedSection} className={about}>
        <h1>
          mengenal <span>marketani</span>
        </h1>
        <p>
          Marketani adalah website untuk petani menjual hasil panen dan produk
          peternakan mereka langsung ke konsumen. Konsumen bisa beli produk
          segar seperti sayuran dan buah-buahan langsung dari petani dalam satu
          transaksi. Marketani membantu mendukung petani lokal dan memberikan
          makanan yang sehat dan segar.
        </p>
      </section>
      <section id="products" className={products}>
        <h1>produk kami</h1>
        <div className={allProducts}>
          <div>
            <div className={productInfo}>
              <h1>sayuran dan buah</h1>
              <p>
                sebagai marketplace online yang berjalan di bidang pertanian,
                kami menyediakan berbagai jenis sayur segar dan buah-buahan yang
                bersumber langsung dari petani lokal di Indonesia. konsumen
                dapat memilih beragam jenis sayur seperti bayam, wortel dan
                bawang putih. atau memilih buah-buahan seperti mangga dan jambu
                biji.
              </p>
            </div>
            <div className={productImg}>
              <img src={vegetable} alt="vegetable" />
            </div>
          </div>
          <div>
            <div className={productInfo}>
              <h1>barang pertanian</h1>
              <p>
                marketani juga menyediakan berbagai jenis barang yang dibutuhkan
                oleh petani untuk keperluan pertanian mereka, seperti pupuk,
                benih, pestisida, dan peralatan pertanian. dengan menyediakan
                berbagai barang yang dibutuhkan petani, kami dapat membantu para
                petani meningkatkan hasil panen dan kualitas tanaman mereka.
              </p>
            </div>
            <div className={productImg}>
              <img src={seed} alt="seed" />
            </div>
          </div>
          <div>
            <div className={productInfo}>
              <h1>olahan hasil tani</h1>
              <p>
                Selain bahan mentah, kami juga menyediakan olahan hasil tani
                antara lain seperti sambal, keripik, kue, dan minuman khas.
                Konsumen dapat memilih beragam jenis produk jadi olahan yang
                diinginkan dan melakukan pembelian dengan mudah melalui platform
                online Marketani.
              </p>
            </div>
            <div className={productImg}>
              <img src={snack} alt="snack" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={contact}>
        <h1>Contact Info</h1>
        <div className={contactList}>
          <div>
            <img src={phone} alt="phone" />
            <h1>Phone</h1>
            <h2>+62 881-287-9626</h2>
          </div>
          <div>
            <img src={email} alt="email" />
            <h1>Email</h1>
            <h2>MarkeTani@gmail.com</h2>
          </div>
          <div>
            <img src={address} alt="address" />
            <h1>Address</h1>
            <h2>Batang, Jawa Tengah</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
