import { Form, Outlet, useLoaderData, redirect, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import Brand from "./components/Brand";
import { getProfile } from "./api";
import style from "./assets/css/App.module.css";

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

  const placeholderPicture = "./user.png";

  return (
    <>
      <div className={style.navbar}>
        <Link to="/">
          <Brand href="" extendedClass={style.extendedBrand} />
        </Link>
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
        <Link to="account">
          <img
            className={style.avatar}
            src={user.avatarUrl || placeholderPicture}
            alt="avatar"
          />
        </Link>
      </div>
      <Outlet context={{ user }} />
    </>
  );
}
