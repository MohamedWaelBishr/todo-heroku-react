import UseStateArray from "./components/useStateExample";
import DarkModeToggle from "./components/DarkMode";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="ToggleMode">
        <DarkModeToggle />
      </div>
      <section>
        <Header />
      </section>

      <section className="container">
        <div className="center">
          <UseStateArray />
        </div>
      </section>
    </div>
  );
}

export default App;
