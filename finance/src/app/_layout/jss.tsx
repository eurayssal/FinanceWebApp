import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts";

//container Pai
export const AppLayoutJss = styled.div({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
});

// TopBar

export const TopBar = styled.div(() => {
    const theme = useContext(ThemeContext);
    return {
        // paddingLeft: '2rem',
        // paddingRight: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-around",
        backgroundColor: theme.pallete.background.colorBgContainer,
        borderBottom: `1px solid ${theme.pallete.colorBorder.colorBorderSecondary}`
    }
});


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

export const LeftConteiner = styled.div({
    display: 'flex',
    paddingTop: '24px',
    paddingBottom: '24px',
    gap: '16px'
});

export const CenterContainer = styled.div({
});

export const RigthConteiner = styled.div({
});


export const LayoutContainerJss = styled.div({
    margin: '16px'
})

export const LogoJss = styled.img({
    maxWidth: '150px',
    cursor: 'pointer'
})