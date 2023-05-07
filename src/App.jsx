import { useLoaderData } from "react-router-dom";
import "./assets/css/App.css";
import InsideLayout from "./InsideLayout";
import Intro from "./pages/Intro";

async function loader() {
  //TODO: get authentication api
  return { isAuthenticated: Boolean(import.meta.env.VITE_AUTHENTICATION) };
}

function App() {
  const { isAuthenticated } = useLoaderData();
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <InsideLayout />;
  } else {
    return <Intro />;
  }
}

export default App;
export { loader };
