import Item from "../components/Item";
import style from "../assets/css/Cart.module.css";
// import { useOutletContext } from "react-router-dom";

export default function Cart() {
  // const { user } = useOutletContext();

  return (
    <section id="cart" className={style.cart}>
      <section id="items" className={style.items}>
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
      <section>
        <section id="location">
          <label>Lokasi</label>
          {/* <p>{`${user.address}`}</p> */}
        </section>
        <section id="courier"></section>
        <section id="resume"></section>
      </section>
    </section>
  );
}
