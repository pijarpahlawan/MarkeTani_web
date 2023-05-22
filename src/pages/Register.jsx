import { Form, Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getProvinces } from "../api/province";
// import { getCities } from "../api/city";
import LabedInputs from "../components/LabedInputs";
import style from "../assets/css/Register.module.css";
// import LabeledSelect from "../components/LabeledSelect";

export default function Register() {
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
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Masukkan username",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Masukkan password",
    },
    {
      id: "repeated-password",
      label: "Ulangi Password",
      type: "password",
      name: "repeated-password",
      placeholder: "Masukkan ulang password",
    },
  ];

  return (
    <div className={style.register}>
      <h1>Registrasi</h1>
      <Form className={style.form}>
        <LabedInputs inputArray={inputs} />
        <button type="submit">Register</button>
      </Form>
      <p>
        Sudah memiliki akun? <Link to="/login">Login</Link>
      </p>
      {/* <LabeledSelect select={provinceSelect} /> */}
    </div>
  );
}
