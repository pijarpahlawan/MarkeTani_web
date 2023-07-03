import style from "../assets/css/Profile.module.css";
import LabeledInput from "../components/LabeledInput";

export default function Password() {
  return  <main className={style.container}>
      <div className={style.header}>
        <h1>Ubah Password Anda</h1>
        <p>Lindung privasi Anda dengan menambah pasword yang unik</p>
        <hr />
      </div>
          <img className={style.image}/>
      <div className={style.header}>
      <LabeledInput extendedClass={style.input} input={{
        id: "oldPswd",
        label: "Password Lama",
        type: "password",
        name: "password_lama",
        placeholder: "Kelompok_3",
        required: true,
      }} />
    <LabeledInput extendedClass={style.input} input={{
        id: "newPswd",
        label: "Password Baru",
        type: "password",
        name: "password_lama",
        placeholder: "Kelompok_3",
        required: true,
      }} />
      <LabeledInput extendedClass={style.input} input={{
        id: "oldPswd",
        label: "Password Lama",
        type: "password",
        name: "password_lama",
        placeholder: "Kelompok_3",
        required: true,
      }} />
      </div>
      <div className={style.btn}>
        <button className={style.btnSubmit}>Apply</button>
      </div>
    </main>

}
