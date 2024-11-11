import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts/theme";

export const SectionJss = styled.div(() => {
    const theme = useContext(ThemeContext);
    return {
        backgroundColor: theme.pallete.background.colorBgContainer,
        borderRadius: 8,
        padding: '48px 32px',
        gap: 32
    }
})

export const ParagraphJss = styled.p(() => {
    const theme = useContext(ThemeContext);
    return {
        color: theme.pallete.colorText.colorTextSecondary
    }
})

export const TitleJss = styled.h1((props) => {
    const theme = useContext(ThemeContext);
    return {
        color: theme.pallete.colorText.colorText,
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '600'
    }
})

export const LogoJss = styled.img(() => {
    return {
        width: 200,
        cursor: 'pointer'
    }
})
