import { Form, Outlet, useLoaderData, redirect, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { getProfile } from "../api";
import Brand from "../components/Brand";
import style from "../assets/css/App.module.css";
import placeholderUser from "/user.png";

const getProfileQuery = () => ({
  queryKey: ["profile", "get"],
  queryFn: () => getProfile(),
});

export const loader = (queryClient) => async () => {
  const result = await queryClient.fetchQuery(getProfileQuery());
  const body = await result.json();

  if (body.code !== 200) {
    return redirect("/intro");
  }

  return { user: body.data };
};

export default function App() {
  const { user } = useLoaderData();

  return (
    <>
      <header className={style.header}>
        <Link to="/">
          <Brand href="" extendedClass={style.extendedBrand} />
        </Link>
        <Form className={style.search} role="search">
          <FaSearch className={style.searchIcon} />
          <input
            type="search"
            name="q"
            id="q"
            placeholder="Cari di Marketani"
          />
        </Form>
        <Link to="account">
          <img
            className={style.avatar}
            src={user.avatarUrl || placeholderUser}
            alt="avatar"
          />
        </Link>
      </header>
      <Outlet context={{ user }} />
    </>
  );
}
