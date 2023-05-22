import style from "../assets/css/Brand.module.css";

export default function Logo(props) {
  return (
    <div className={`${style.brand} ${props.extendedClass}`}>
      <a href={props.href}>
        <h1>
          <span>M</span>arke<span>T</span>ani
        </h1>
      </a>
    </div>
  );
}
