import React from "react";
import useDarkMode from "use-dark-mode";
import Button from "@material-ui/core/Button";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <section>
      <div>
        <button
          type="button"
          className="btn btn-light"
          onClick={darkMode.disable}
        >
          Light 🌞
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={darkMode.enable}
        >
          Dark 🌙
        </button>
      </div>
    </section>
  );
};

export default DarkModeToggle;
