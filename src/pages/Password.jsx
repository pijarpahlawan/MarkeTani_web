import style from "../assets/css/Password.module.css";

export default function Password() {
  const inputs = [
    {
      id: "oldPswd",
      label: "Password Lama",
      type: "password",
      name: "password_lama",
      placeholder: "Kelompok_3",
      required: true,
    },
    {
      id: "newPswd",
      label: "Password Baru",
      type: "password",
      name: "password_lama",
      placeholder: "Kelompok_3",
      required: true,
    },
    {
      id: "oldPswd",
      label: "Password Lama",
      type: "password",
      name: "password_lama",
      placeholder: "Kelompok_3",
      required: true,
    },
  ].map((input) => {
    return (
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
    );
  });
  return (
    <main className={style.container}>
      <div className={style.header}>
        <h1>Ubah Password Anda</h1>
        <p>Lindung privasi Anda dengan menambah pasword yang unik</p>
        <hr />
      </div>
      <img className={style.image} />
      <div className={style.header}>{inputs}</div>
      <div className={style.btn}>
        <button className={style.btnSubmit}>Apply</button>
      </div>
    </main>
  );
}
