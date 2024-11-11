import React, { useContext } from "react";
import ThemeContext from ".";
import { FaMoon, FaSun } from "react-icons/fa";
import Button from "../../components/button";

const ToggleThemeButton: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <Button onClick={toggleDarkMode} icon={isDarkMode ? FaSun : FaMoon}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
    );
};

export default ToggleThemeButton;
