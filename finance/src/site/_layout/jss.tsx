import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts/theme";

//container Pai
export const AppLayoutJss = styled.div({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
});

//Footer
export const Footer = styled.div(() => {
    const theme = useContext(ThemeContext);
    return {
        color: theme.pallete.colorText.colorText,
        display: 'flex',
        backgroundColor: theme.pallete.background.colorBgContainer,
        alignItems: 'center',
        padding: '12px',
        marginTop: 'auto',
        justifyContent: 'center'
    }
});
