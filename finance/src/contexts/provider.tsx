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

interface IThemeProviderProps extends PropsWithChildren {
    toggle: boolean
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({
    children, toggle
}) => {

    function handleGetGlobalStyles() {
        const colors = toggle ? GetDarkMode() : GetLightMode();

        return {
            '*': {
                ...defaultStyle,
                'html, body': {
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
        isDarkMode: toggle,
        pallete: toggle ? GetDarkMode() : GetLightMode(),
        toggleDarkMode: () => toggle
    }}>
        <Global styles={handleGetGlobalStyles} />

        {children}
    </ThemeContext.Provider>)
};

export default ThemeProvider;
