import { useState, useRef, useEffect } from "react";
import style from "../../assets/css/Home.module.css";
import img from "../../assets/js/home-image";

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
    thisElement.classList.toggle(style.inactive);
    console.log(window.location.hash);
  };

  const products = [
    {
      title: "Sayuran dan Buah",
      description:
        "sebagai marketplace online yang berjalan di bidang pertanian, \
        kami menyediakan berbagai jenis sayur segar dan buah-buahan yang \
        bersumber langsung dari petani lokal di Indonesia. konsumen dapat \
        memilih beragam jenis sayur seperti bayam, wortel dan bawang putih. \
        atau memilih buah-buahan seperti mangga dan jambu biji.",
      img: img.vegetable,
      alt: "vegetable",
    },
    {
      title: "Barang Pertanian",
      description:
        "marketani juga menyediakan berbagai jenis barang yang dibutuhkan \
        oleh petani untuk keperluan pertanian mereka, seperti pupuk, benih, \
        pestisida, dan peralatan pertanian. dengan menyediakan berbagai barang \
        yang dibutuhkan petani, kami dapat membantu para petani meningkatkan \
        hasil panen dan kualitas tanaman mereka.",
      img: img.seed,
      alt: "seed",
    },
    {
      title: "Olahan Hasil Tani",
      description:
        "selain bahan mentah, kami juga menyediakan olahan hasil tani \
        antara lain seperti sambal, keripik, kue, dan minuman khas. \
        konsumen dapat memilih beragam jenis produk jadi olahan yang \
        diinginkan dan melakukan pembelian dengan mudah melalui platform \
        online Marketani.",
      img: img.snack,
      alt: "snack",
    },
  ].map((product) => {
    return (
      <div key={product.alt}>
        <div className={style.productInfo}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={style.productImg}>
          <img src={product.img} alt={product.alt} />
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
        <img src={contact.img} alt="phone" />
        <h1>{contact.title}</h1>
        <h2>{contact.description}</h2>
      </div>
    );
  });

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
      <nav ref={navbarElm} className={style.navBar}>
        <div className={style.navBrand}>
          <a href="#">
            <h1>
              <span>M</span>arke<span>T</span>ani
            </h1>
          </a>
        </div>
        <div ref={navListElm} className={`${style.navList} ${style.inactive}`}>
          <span
            onClick={() => navToggle(isNavListActive)}
            className={style.hamburger}
          >
            <span></span>
          </span>
          <ul>{navLinks}</ul>
          <a href="#" type="button">
            login
          </a>
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
          <a href="#projects" type="button">
            Bergabung<span></span>
          </a>
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
        <h1>Contact Info</h1>
        <div className={style.contactList}>{contactInfo}</div>
      </section>
    </>
  );
}

export default Home;
