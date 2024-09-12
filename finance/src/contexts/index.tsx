import { createContext } from "react";
import { ICurrentColorPallete } from "./pallete";

interface IThemeContextProps {
    toggleDarkMode: () => void;
    pallete: ICurrentColorPallete;
    isDarkMode: boolean;
}

const ThemeContext = createContext<IThemeContextProps>({} as any);

export default ThemeContext;
//VEr como criar um button que troca entre temas