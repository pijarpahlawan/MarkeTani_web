import Item from "../components/Item";
import style from "../assets/css/Cart.module.css";

export default function Cart() {
  return (
    <section id="cart" className={style.cart}>
      <section id="items" className={style.items}>
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
      <section>
        <section id="location"></section>
        <section id="courier"></section>
        <section id="resume"></section>
      </section>
    </section>
  );
}
