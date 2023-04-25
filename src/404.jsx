import { error, container } from "./assets/css/404.module.css";

function Error() {
  return (
    <section className={error}>
      <div className={container}>
        <h1>404</h1>
        <p>Page Not Found.</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </section>
  );
}

export default Error;
