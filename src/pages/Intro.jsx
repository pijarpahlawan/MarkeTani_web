import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import style from "../assets/css/Intro.module.css";
import img from "../assets/js/intro-image";

export default function Intro() {
  const [distanceScroll, setDistanceScroll] = useState(0); // [px]
  const navListElm = useRef(null);
  const navbarElm = useRef(null);
  const basedSection = useRef(null);

  const navLinks = [
    { title: "Beranda", path: "" },
    { title: "Tentang", path: "about" },
    { title: "Produk", path: "products" },
    { title: "Kontak", path: "contact" },
  ].map((link) => {
    return (
      <li onClick={() => navToggle()} key={link.title}>
        <a href={`#${link.path}`}>{link.title}</a>
      </li>
    );
  });

  const navToggle = () => {
    const thisElement = navListElm.current;
    thisElement.classList.toggle(style.inactive);
  };

  const products = [
    {
      id: "vegetable",
      title: "Sayuran dan Buah",
      description:
        "Sebagai marketplace online yang berjalan di bidang pertanian, \
        kami menyediakan berbagai jenis sayur segar dan buah-buahan yang \
        bersumber langsung dari petani lokal di Indonesia. Konsumen dapat \
        memilih beragam jenis sayur seperti bayam, wortel dan bawang putih. \
        Atau memilih buah-buahan seperti mangga dan jambu biji.",
      img: img.vegetable,
    },
    {
      id: "seed",
      title: "Barang Pertanian",
      description:
        "Marketani juga menyediakan berbagai jenis barang yang dibutuhkan \
        oleh petani untuk keperluan pertanian mereka, seperti pupuk, benih, \
        pestisida, dan peralatan pertanian. Dengan menyediakan berbagai barang \
        yang dibutuhkan petani, kami dapat membantu para petani meningkatkan \
        hasil panen dan kualitas tanaman mereka.",
      img: img.seed,
    },
    {
      id: "snack",
      title: "Olahan Hasil Tani",
      description:
        "Selain bahan mentah, kami juga menyediakan olahan hasil tani \
        antara lain seperti sambal, keripik, kue, dan minuman khas. \
        Konsumen dapat memilih beragam jenis produk jadi olahan yang \
        diinginkan dan melakukan pembelian dengan mudah melalui platform \
        online Marketani.",
      img: img.snack,
    },
  ].map((product) => {
    return (
      <div key={product.id}>
        <div className={style.productInfo}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={style.productImg}>
          <img src={product.img} alt={product.id} />
        </div>
      </div>
    );
  });

  const contactInfo = [
    {
      img: img.phone,
      title: "Telepon",
      description: "+62 812-345-678-90",
    },
    {
      img: img.email,
      title: "Email",
      description: "MarkeTani@gmail.com",
    },
    {
      img: img.address,
      title: "Alamat",
      description: "Batang, Jawa Tengah",
    },
  ].map((contact) => {
    return (
      <div key={contact.title}>
        <img src={contact.img} alt={contact.title} />
        <h1>{contact.title}</h1>
        <h2>{contact.description}</h2>
      </div>
    );
  });

  const socialMedia = [
    {
      id: "facebook",
      target: "https://web.facebook.com/?_rdc=1&_rdr",
      icon: img.facebook,
    },
    {
      id: "instagram",
      target: "https://www.instagram.com/?hl=en",
      icon: img.instagram,
    },
    {
      id: "twitter",
      target: "https://twitter.com/i/flow/login",
      icon: img.twitter,
    },
    {
      id: "telegram",
      target: "https://web.telegram.org/k/",
      icon: img.telegram,
    },
  ].map((social) => {
    return (
      <div key={social.id}>
        <a href={social.target} target="_blank" rel="noreferrer">
          <img src={social.icon} alt={social.id} />
        </a>
      </div>
    );
  });

  useEffect(() => {
    const scrolled = () => {
      const target = navbarElm.current;
      const distance = basedSection.current.getBoundingClientRect().top;
      setDistanceScroll(distance);
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
      <nav ref={navbarElm} className={style.navBar}>
        <a href="#">
          <Brand />
        </a>
        <div ref={navListElm} className={`${style.navList} ${style.inactive}`}>
          <span onClick={() => navToggle()} className={style.hamburger}>
            <span></span>
          </span>
          <ul>{navLinks}</ul>
          <Link to="/login">login</Link>
        </div>
      </nav>
      <section className={style.hero}>
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
          <Link to="/register">
            Bergabung<span></span>
          </Link>
        </div>
      </section>
      <section id="about" ref={basedSection} className={style.about}>
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
      <section id="products" className={style.products}>
        <h1>produk kami</h1>
        <div className={style.allProducts}>{products}</div>
      </section>
      <section id="contact" className={style.contact}>
        <h1>info kontak</h1>
        <div className={style.contactList}>{contactInfo}</div>
      </section>
      <section className={style.footer}>
        <a href="#">
          <Brand />
        </a>
        <h2>Ikuti Kami</h2>
        <div>{socialMedia}</div>
      </section>
    </>
  );
}
