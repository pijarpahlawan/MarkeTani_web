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
import Error from "./pages/404";
import Intro from "./pages/Intro";
import Authentication from "./layouts/Authentication";
import Register from "./pages/Register";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={appLoader} element={<App />}>
        <Route index element={<h1>Hallo</h1>} />
        <Route path="coba" element={<h1>Coba</h1>} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/intro" element={<Intro />} />
      <Route element={<Authentication />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
