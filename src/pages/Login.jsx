import { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { login } from "../api";
import ErrorPopup from "../components/ErrorPopup";
import style from "../assets/css/Login.module.css";

export const action =
  (queryClient) =>
  async ({ request }) => {
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
  const navigation = useNavigation();
  const errorMessage = useActionData() || null;
  const [error, setError] = useState();

  useEffect(() => {
    document.getElementById("login-form").reset();
    setError(errorMessage);
  }, [errorMessage, navigation.state]);

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
  ].map((input) => (
    <div className={`${style.input}`} key={input.id}>
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
  ));

  return (
    <div className={style.login}>
      {error && (
        <ErrorPopup message={error} closePopup={() => setError(null)} />
      )}
      <h1>Log In</h1>
      <Form id="login-form" method="post" className={style.form}>
        {inputs}
        <button type="submit">
          {navigation.state === "submitting"
            ? "Submitting..."
            : navigation.state === "loading"
            ? "Loading..."
            : "Log In"}
        </button>
      </Form>
      <p>
        Belum memiliki akun? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
