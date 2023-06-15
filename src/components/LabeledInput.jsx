import style from "../assets/css/LabeledInput.module.css";

export default function LabedInput(props) {
    return (
      <div className={`${style.input} ${props.extendedClass}`} key={props.input.id}>
        <label htmlFor={props.input.id}>{props.input.label}</label>
        <input
          type={props.input.type}
          id={props.input.id}
          name={props.input.name}
          defaultValue={props.input.defaultValue}
          placeholder={props.input.placeholder}
          required={props.input.requried}
        />
      </div>
    );
}