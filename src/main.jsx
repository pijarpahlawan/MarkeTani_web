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
import Profile from "./layouts/Profile";
import Intro from "./pages/Intro";
import Register, { action as registerAction } from "./pages/Register";
import Login, { action as loginAction } from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import "./assets/css/main.css";

const queryClient = new QueryClient({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={appLoader(queryClient)} element={<App />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Profile />} />
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
