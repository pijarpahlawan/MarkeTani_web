import { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { login } from "../api";
import LabeledInput from "../components/LabeledInput";
import ErrorPopup from "../components/ErrorPopup";
import style from "../assets/css/Profile.module.css";


export default function Profile() {
  const inputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Kelompok_3",
      required: true,
    },
    {
      id: "Name",
      label: "Nama",
      type: "text",
      name: "name",
      placeholder: "Kel_3",
      required: true,
    },
    {
      id: "Email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "kelompok3@gmail.com",
      required: true,
    },
    {
      id: "No_Tlp",
      label: "Nomer Telepon",
      type: "text",
      name: "tlp",
      placeholder: "081217478861",
      required: true,
    }
  ].map((data) => {
    return (
      <LabeledInput extendedClass={style.input} input={data} />
    )
  })
  const option = ['Kota/Kabupaten', 'Province'].map(option => {
    return (
      <select name="" id="">
        <option value={option}>{option}</option>
      </select>
    )
  })
  const genders = ['Laki-laki', 'Perempuan'].map(gender => {
    return (
      <div>
        <input name="gender" value={gender} type="radio" />
        <span htmlFor="">{gender}</span>
      </div>
    )
  })
  return (
    <main className={style.container}>
      <section className={style.header}>
        <h1>Pofile Saya</h1>
        <p>Kelola informasi Anda untuk mengontrol, melindungi, dan mengamankan akun</p>
        <hr />
      </section>
      <form className={style.form}>
        {/* profile input */}
        <div>
          {inputs}
          <div className={style.options}>
            <label className={style.label} htmlFor="">Jenis Kelamin</label>
            <div className={style.option}>
              {genders}
            </div>
          </div>
          <div className={style.options}>
            <label className={style.label} htmlFor="">Lokasi</label>
            <div className={style.option}>
              {option}
            </div>
          </div>
      <div className={style.btn}>
        <button className={style.btnSubmit} type="submit">Apply</button>
      </div>
        </div>
        {/* bagian avatar */}
        <div className={style.avatar}>
          <img className={style.gambar}/>
          <input className={style.file} type="file" />
          <p>Ukuran Gambar maks 1 MB</p>
          <p>Format Gambar : JPEG, PNG</p>
        </div>
        {/* bagian avatar */}
      </form>
      {/* end bagian profil */}
    </main>

  );

}
