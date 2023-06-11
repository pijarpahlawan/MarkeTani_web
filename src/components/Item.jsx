import placeholderProduct from "/product.png";
import style from "../assets/css/Item.module.css";

export default function Item() {
  // const { name, imgUrl, price, stock } = null;
  // const { buyed, setBuyed } = null;

  return (
    <div className={style.item}>
      {/* <img src={imgUrl || placeholderProduct} alt="product" /> */}
      <img src={placeholderProduct} alt="product" />
      <div className={style.detail}>
        {/* <label className={style.itemName}>{name || `Product`}</label> */}
        <label className={style.itemName}>{`Product`}</label>
        <label className={style.itemPrice} htmlFor="price">
          {`Rp.` + `xxx`}
          {/* {`Rp.` + (price || `xxx`)} */}
        </label>
        <div className={style.itemStock}>
          <label htmlFor="stock">Stock :</label>
          {/* <label>{stock || `nn`}</label> */}
          <label>{`nn`}</label>
        </div>
        <div className={style.itemBuyed}>
          {/* <button onClick={setBuyed(buyed - 1)}>-</button> */}
          <button>-</button>
          {/* <label htmlFor="buyed">{buyed}</label> */}
          <label htmlFor="buyed">nn</label>
          {/* <button onClick={setBuyed(buyed - 1)}>+</button> */}
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
