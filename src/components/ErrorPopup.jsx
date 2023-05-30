import style from "../assets/css/ErrorPopup.module.css";

export default function ErrorPopup(props) {
  const { message, closePopup } = props;

  return (
    <div className={style.errorPopup}>
      <span>{message}</span>
      <button onClick={closePopup}>OK</button>
    </div>
  );
}
