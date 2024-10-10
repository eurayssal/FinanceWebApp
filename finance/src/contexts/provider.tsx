import React, { useEffect } from "react";
import { PropsWithChildren } from "react"
import { GetDarkMode, GetLightMode } from "./pallete";
import ThemeContext from ".";
import { Global } from "@emotion/react";


const ThemeProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
        const savedTheme = localStorage.getItem("isDarkMode");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });


    const defaultStyle = {
        margin: 0,
        padding: 0,
        outline: 0,
        fontFamily: '"Poppins", sans-serif',
    }

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    function handleGetGlobalStyles() {
        const colors = isDarkMode ? GetDarkMode() : GetLightMode();

        return {
            '*': {
                ...defaultStyle,
                'html, body': {
                    color: colors.colorText.colorText,
                    height: '100%',
                    background: colors.background.colorBgLayout
                }
            }
        }
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
        toggleDarkMode
    }}>
        <Global styles={handleGetGlobalStyles()} />
        {children}
    </ThemeContext.Provider>)
};

export default ThemeProvider;
