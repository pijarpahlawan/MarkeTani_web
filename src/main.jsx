import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/css/main.css";
import App, { loader as appLoader } from "./App";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Authentication from "./layouts/Authentication";
import Register, { action as registerAction } from "./pages/Register";
import Login, { action as loginAction } from "./pages/Login";
import Home from "./pages/Home";

const queryClient = new QueryClient({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={appLoader(queryClient)} element={<App />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Profile />} />
        {/* <Route path="*" element={<Error />} /> */}
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
