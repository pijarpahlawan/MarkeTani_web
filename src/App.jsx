import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import Brand from "./components/Brand";
import style from "./assets/css/App.module.css";

export const loader = async () => {
  //TODO: check authentication validity with token
  //TODO: get user info
  const user = { avatarUrl: "./trump.jpg" };
  const isAuthenticated = JSON.parse(import.meta.env.VITE_AUTHENTICATION);
  if (!isAuthenticated) {
    return redirect("/intro");
  }
  return { user };
};

export default function App() {
  const { user } = useLoaderData();
  return (
    <>
      <div className={style.navbar}>
        <Brand href="" />
        <Form className={style.search} role="search">
          <IconContext.Provider value={{ className: style.searchIcon }}>
            <FaSearch />
          </IconContext.Provider>
          <input
            type="search"
            name="q"
            id="q"
            placeholder="Cari di Marketani"
          />
        </Form>
        <img className={style.avatar} src={user.avatarUrl} alt="avatar" />
      </div>
      <Outlet />
    </>
  );
}
