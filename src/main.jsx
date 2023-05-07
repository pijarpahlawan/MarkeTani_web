import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error from "./404";
import App, { loader as appLoader } from "./App";

// environtment variables
// const serverHostname = import.meta.env.VITE_HOSTNAME || "localhost";
// const serverPort = import.meta.env.VITE_PORT || 8000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={appLoader} element={<App />}>
      <Route index element={<h1>Hallo</h1>} />
      <Route path="/coba" element={<h1>Coba</h1>} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
