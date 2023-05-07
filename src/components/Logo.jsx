import style from "../assets/css/Logo.module.css";

function Logo(props) {
  return (
    <div className={style.brand}>
      <a href={props.href}>
        <h1>
          <span>M</span>arke<span>T</span>ani
        </h1>
      </a>
    </div>
  );
}

export default Logo;
