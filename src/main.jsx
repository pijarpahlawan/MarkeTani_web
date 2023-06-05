import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App, { loader as appLoader } from "./layouts/App";
import Authentication from "./layouts/Authentication";
import Account from "./layouts/Account";
import Intro from "./pages/Intro";
import Register, { action as registerAction } from "./pages/Register";
import Login, { action as loginAction } from "./pages/Login";
import Profile from "./pages/Profile";
import Password from "./pages/Password";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import History from "./pages/History";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import "./assets/css/main.css";

const queryClient = new QueryClient({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={appLoader(queryClient)} element={<App />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />}>
          <Route path="profile" element={<Profile />} />
          <Route path="password" element={<Password />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="history" element={<History />} />
        </Route>
      </Route>
      <Route path="/intro" element={<Intro />} />
      <Route element={<Authentication />}>
        <Route
          path="/register"
          action={registerAction(queryClient)}
          element={<Register />}
        />
        <Route
          path="/login"
          action={loginAction(queryClient)}
          element={<Login />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
