import style from "../assets/css/LabeledInputs.module.css";

export default function LabedInputs(props) {
  const labeledInputs = props.inputArray.map((input) => {
    return (
      <div className={style.input} key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        <input
          type={input.type}
          id={input.id}
          name={input.name}
          defaultValue={input.defaultValue}
          placeholder={input.placeholder}
          required={input.requried}
        />
      </div>
    );
  });

  return labeledInputs;
}
