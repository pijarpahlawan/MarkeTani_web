import { Form, Link } from "react-router-dom";
import LabeledInputs from "../components/LabedInputs";
import style from "../assets/css/Login.module.css";

export default function Login() {
  const inputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Username",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*******",
    },
  ];

  return (
    <div className={style.login}>
      <h1>Log In</h1>
      <Form className={style.form}>
        <LabeledInputs inputArray={inputs} />
        <button type="submit">Log In</button>
      </Form>
      <p>
        Belum memiliki akun? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
