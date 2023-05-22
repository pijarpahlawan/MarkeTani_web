import style from "../assets/css/Brand.module.css";

export default function Logo(props) {
  return (
    <div className={`${style.brand} ${props.extendedClass}`}>
      <h1>
        <span>M</span>arke<span>T</span>ani
      </h1>
    </div>
  );
}
