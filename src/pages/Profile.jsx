import { useState, useRef } from "react";
import { Form, redirect } from "react-router-dom";
// import ErrorPopup from "../components/ErrorPopup";
import style from "../assets/css/Profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { province as getProvinces, updateProfile } from "../api";
import { city as getCities } from "../api";
import { useOutletContext } from "react-router-dom";
import placeholderUser from "/user.png";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const response = await updateProfile(data);
    const body = await response.json();

    if (response.status !== 200) {
      const errorMessage = body.message;
      return errorMessage;
    }

    queryClient.invalidateQueries({ queryKey: ["profile", "get"] });
    return redirect("/account");
  };

export default function Profile() {
  const { user } = useOutletContext();
  const [selectedProvince, setSelectedProvince] = useState("null");
  const [editMode, setEditMode] = useState(false);
  const formRef = useRef(null);

  const { data: provinceQueryData, status: provinceQueryStatus } = useQuery({
    queryKey: ["provinces", "list", "all"],
    queryFn: () =>
      getProvinces()
        .then((res) => res.json())
        .then((resJson) => resJson.data),
  });

  const { data: cityQueryData, status: cityQueryStatus } = useQuery({
    queryKey: ["cities", "list", selectedProvince],
    queryFn: () =>
      getCities(selectedProvince)
        .then((res) => res.json())
        .then((resJson) => resJson.data),
  });

  const provinceOptions =
    provinceQueryStatus === "loading"
      ? [{ id: "null", value: "Please wait..." }]
      : [
          { id: "null", value: "Provinsi" },
          ...provinceQueryData.map((province) => {
            return { id: province.province_id, value: province.province };
          }),
        ];

  const cityOptions =
    cityQueryStatus === "loading"
      ? [{ id: "null", value: "Please wait..." }]
      : [
          { id: "null", value: "Kabupaten/Kota" },
          ...cityQueryData.map((city) => {
            return { id: city.city_id, value: city.city_name };
          }),
        ];

  const selectProvince = (e) => {
    setSelectedProvince(e.target.value);
  };

  const cancelEdit = () => {
    const thisElement = formRef.current;
    thisElement.reset();
    setEditMode(false);
  };

  const inputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      name: "username",
      placeholder: user.username,
      defaultValue: user.username,
      required: true,
    },
    {
      id: "name",
      label: "Nama",
      type: "text",
      name: "name",
      placeholder: user.name,
      defaultValue: user.name,
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: user.email,
      defaultValue: user.Account.email,
      required: true,
    },
    {
      id: "phone",
      label: "Nomer Telepon",
      type: "text",
      name: "phone",
      placeholder: user.phone,
      defaultValue: user.phone,
      required: true,
    },
    {
      id: "address",
      label: "Alamat",
      type: "text",
      name: "address",
      placeholder: user.address,
      defaultValue: user.address,
      required: true,
    },
  ].map((input) => {
    return (
      <div className={`${style.input}`} key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        {editMode ? (
          <input
            type={input.type}
            id={input.id}
            name={input.name}
            defaultValue={input.defaultValue}
            placeholder={input.placeholder}
            required={input.requried}
          />
        ) : (
          <p>{`: ` + (input.defaultValue || "")}</p>
        )}
      </div>
    );
  });

  const selects = [
    {
      id: "province",
      name: "provinceId",
      options: provinceOptions,
      onChange: selectProvince,
    },
    {
      id: "city",
      name: "cityId",
      options: cityOptions,
      onChange: () => {},
    },
  ].map((select) => {
    return (
      <select
        key={select.id}
        id={select.id}
        name={select.name}
        defaultValue={select.options[0].id}
        placeholder={select.options[0].value}
        onChange={select.onChange}
        required
      >
        {select.options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  });

  const genders = [
    {
      id: "male",
      label: "Laki-Laki",
    },
    {
      id: "female",
      label: "Perempuan",
    },
  ].map((gender) => {
    return (
      <div key={gender.id}>
        <input
          id={gender.id}
          name="gender"
          value={gender.id}
          type="radio"
          required
        />
        <label htmlFor="gender">{gender.label}</label>
      </div>
    );
  });

  return (
    <main className={style.container}>
      <section className={style.header}>
        <h1>Pofile Saya</h1>
        <p>
          Kelola informasi Anda untuk mengontrol, melindungi, dan mengamankan
          akun
        </p>
        <hr />
      </section>
      <Form method="post" ref={formRef} className={style.form}>
        {/* profile input */}
        <div>
          {inputs}
          <div className={style.options}>
            <label className={style.label} htmlFor="">
              Lokasi
            </label>
            {editMode ? (
              <div className={style.option}>{selects}</div>
            ) : (
              <p>{user.city}</p>
            )}
          </div>
          <div className={style.options}>
            <label className={style.label} htmlFor="">
              Jenis Kelamin
            </label>
            {editMode ? (
              <div className={style.option}>{genders}</div>
            ) : (
              <p>{user.gender}</p>
            )}
          </div>
          <div className={style.btn}>
            {editMode ? (
              <>
                <button className={style.btnSubmit} type="submit">
                  Apply
                </button>
                <button
                  className={style.btnSubmit}
                  type="button"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className={style.btnSubmit}
                type="button"
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        {/* bagian avatar */}
        <img className={style.gambar} src={user.avatarUrl || placeholderUser} />
        {editMode ? (
          <div className={style.avatar}>
            <input className={style.file} name="avatar" type="file" />
            <p>Ukuran Gambar maks 1 MB</p>
            <p>Format Gambar : JPEG, PNG</p>
          </div>
        ) : (
          <></>
        )}
        {/* bagian avatar */}
      </Form>
      {/* end bagian profil */}
    </main>
  );
}
