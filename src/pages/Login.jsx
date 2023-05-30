import {
  Form,
  Link,
  redirect,
  useActionData,
  useOutletContext,
} from "react-router-dom";
import LabeledInputs from "../components/LabeledInputs";
import style from "../assets/css/Login.module.css";
import { login } from "../api";

export const action =
  (queryClient) =>
  async ({ request }) => {
    document.getElementById("login-form").reset();

    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await login(data);
    const body = await response.json();

    if (response.status !== 200) {
      const errorMessage = body.message;
      return errorMessage;
    }

    queryClient.invalidateQueries({ queryKey: ["profile", "get"] });
    return redirect("/");
  };

export default function Login() {
  const errorMessage = useActionData() || null;
  const setErrorMessage = useOutletContext();

  console.log(errorMessage);

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*******",
      required: true,
    },
  ];

  return (
    <div className={style.login}>
      <h1>Log In</h1>
      <Form id="login-form" method="post" className={style.form}>
        <LabeledInputs inputArray={inputs} />
        <button type="submit" onClick={() => setErrorMessage(errorMessage)}>
          Log In
        </button>
      </Form>
      <p>
        Belum memiliki akun? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
