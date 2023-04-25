import { hero, container } from "./assets/css/App.module.css";

function App() {
  return (
    <section className={hero}>
      <div className={container}>
        <h1>Hello World!</h1>
        <p>
          Welcome to my website. This is the beginning of a new adventure, and
          I&apos;m excited to have you along for the ride.
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default App;
