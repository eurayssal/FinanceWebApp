import React, { useContext } from "react";
import ThemeContext from ".";

const ToggleThemeButton: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
};

export default ToggleThemeButton;
