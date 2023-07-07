// import { useEffect, useRef, useState } from "react";

export default function LabeledSelect(props) {
  // const select = useRef(null);
  // const [value, setValue] = useState(null);
  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const labeledSelect = (
    <div key={props.select.id}>
      <label htmlFor={props.select.id}>{props.select.label}</label>
      <select
        id={props.select.id}
        name={props.select.name}
        defaultValue={props.select.options[0].id}
        placeholder={props.select.options[0].value}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        required
      >
        {props.select.options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
  // setValue(select.current?.value);
  // props.getSelectedProvince(select.current?.value);

  return labeledSelect;
}
