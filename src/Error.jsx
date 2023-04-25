import { error, container } from "./assets/css/Error.module.css";

function Error() {
  return (
    <section className={error}>
      <div className={container}>
        <h1>Oops! Something went wrong.</h1>
        <p>
          We&apos;re sorry, but it looks like there was an error processing your
          request.
        </p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </section>
  );
}

export default Error;
