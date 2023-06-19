import { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getProvinces } from "../api/province";
// import { getCities } from "../api/city";
import { register } from "../api";
import LabeledInput from "../components/LabeledInput";
import ErrorPopup from "../components/ErrorPopup";
import style from "../assets/css/Register.module.css";
// import LabeledSelect from "../components/LabeledSelect";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await register(data);
    const body = await response.json();

    if (response.status !== 201) {
      const errorMessage = body.message;
      return errorMessage;
    }

    queryClient.invalidateQueries({ queryKey: ["profile", "get"] });
    return redirect("/");
  };

export default function Register() {
  const navigation = useNavigation();
  const errorMessage = useActionData() || null;
  const [error, setError] = useState();

  useEffect(() => {
    document.getElementById("registration-form").reset();
    setError(errorMessage);
  }, [errorMessage, navigation.state]);

  // const { data: provinceQueryData, status: provinceQueryStatus } = useQuery({
  //   queryKey: ["provinces", "list", "all"],
  //   queryFn: () => getProvinces().then((res) => res.body),
  // });

  // const provinceOptions =
  //   provinceQueryStatus === "loading"
  //     ? [{ id: 0, value: "Please wait..." }]
  //     : [
  //         { id: 0, value: "Pilih kota" },
  //         ...provinceQueryData.map((province) => {
  //           return { id: province.province_id, value: province.province };
  //         }),
  //       ];

  // const provinceSelect = {
  //   id: "province-select",
  //   name: "provinsi",
  //   label: "Provinsi",
  //   options: provinceOptions,
  // };

  // console.log(provinces);

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Masukkan email",
      required: true,
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Masukkan username",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Masukkan password",
      required: true,
    },
    {
      id: "repeated-password",
      label: "Ulangi Password",
      type: "password",
      name: "repeated-password",
      placeholder: "Masukkan ulang password",
      required: true,
    },
  ];

  return (
    <div className={style.register}>
      {error && (
        <ErrorPopup message={error} closePopup={() => setError(null)} />
      )}
      <h1>Registrasi</h1>
      <Form id="registration-form" method="post" className={style.form}>
        <LabeledInputs inputArray={inputs} />
        <button type="submit">
          {navigation.state === "submitting"
            ? "Submitting..."
            : navigation.state === "loading"
            ? "Loading..."
            : "Register"}
        </button>
      </Form>
      <p>
        Sudah memiliki akun? <Link to="/login">Login</Link>
      </p>
      {/* <LabeledSelect select={provinceSelect} /> */}
    </div>
  );
}
