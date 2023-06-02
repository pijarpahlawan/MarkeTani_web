import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import style from "../assets/css/ErrorPopup.module.css";

export default function ErrorPopup(props) {
  return (
    <div className={style.errorPopup}>
      <span>{props.message}</span>
      <IconContext.Provider value={{ className: style.closeIcon }}>
        <AiOutlineClose onClick={props.closePopup} />
      </IconContext.Provider>
    </div>
  );
}
