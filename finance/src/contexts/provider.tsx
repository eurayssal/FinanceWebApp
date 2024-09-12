import React from "react";
import { PropsWithChildren } from "react"
import { GetDarkMode, GetLightMode } from "./pallete";
import ThemeContext from ".";
import { Global } from "@emotion/react";

const defaultStyle = {
    margin: 0,
    padding: 0,
    outline: 0,
    fontFamily: '"Poppins", sans-serif',
}

const ThemeProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    function handleGetGlobalStyles() {
        const colors = isDarkMode ? GetDarkMode() : GetLightMode();

        return {
            '*': {
                ...defaultStyle,
                'html, body': {
                    height: '100%',
                    background: colors.backgroundColor
                }
            }
        }
    }

    function handleToggleDarkMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    //#region Caso queira utilizar o tema do windows

    // function handleToggleDarkMode() {
    //     setIsDarkMode(!isDarkMode)
    // }

    // React.useEffect(() => {
    //     const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    //     setIsDarkMode(matcher.matches);

    //     const listener = (event: MediaQueryListEvent) => {
    //         setIsDarkMode(event.matches);
    //     }

    //     matcher.addEventListener('change', listener);

    //     return () => {
    //         matcher.removeEventListener('change', listener)
    //     }
    // }, []);

    //#endregion

    return (<ThemeContext.Provider value={{
        isDarkMode,
        pallete: isDarkMode ? GetDarkMode() : GetLightMode(),
        toggleDarkMode: handleToggleDarkMode
    }}>
        <Global styles={handleGetGlobalStyles} />
        {/* <button onClick={handleToggleDarkMode}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button> */}
        {children}
    </ThemeContext.Provider>)
};

export default ThemeProvider;
