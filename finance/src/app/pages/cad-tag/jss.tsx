import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../../contexts/theme";

export const CardJss = styled.div(() => {
    const theme = useContext(ThemeContext);
    return {
        backgroundColor: theme.pallete.background.colorBgContainer,
        borderRadius: 8,
        padding: '4px 16px',
        cursor: 'pointer',

        ':hover': {
            backgroundColor: theme.pallete.fill.colorFillSecondary
        }
    }
});

//TODO: Criar componete de section
export const SectionJss = styled.div(() => {
    const theme = useContext(ThemeContext);
    return {
        backgroundColor: theme.pallete.background.colorBgContainer,
        borderRadius: 8,
        padding: 16,
        gap: 32
    }
})