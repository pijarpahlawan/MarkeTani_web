import placeholderProduct from "/product.png";
import style from "../assets/css/MiniItem.module.css";

export default function MiniItem() {
  // const { name, imgUrl, price, stock } = null;
  // const { buyed, setBuyed } = null;

  return (
    <div className={style.item}>
      {/* <img src={imgUrl || placeholderProduct} alt="product" /> */}
      <img src={placeholderProduct} alt="product" />
      <div className={style.detail}>
        {/* <label className={style.itemName}>{name || `Product`}</label> */}
        <label className={style.itemName}>{`Product`}</label>
        <div className={style.harga}>
            <label className={style.itemPrice} htmlFor="price">
            {`Rp.` + `xxx`}
            {/* {`Rp.` + (price || `xxx`)} */}
            </label>
            <div className={style.itemStock}>
            <label htmlFor="stock">JB :</label>
            {/* <label>{stock || `nn`}</label> */}
            <label>{`nn`}</label>
            </div>
        </div>
      </div>
    </div>
  );
}
