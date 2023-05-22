import { error, container } from "../assets/css/404.module.css";

export default function Error() {
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
