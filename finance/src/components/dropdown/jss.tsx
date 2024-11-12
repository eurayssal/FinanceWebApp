import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts/theme";

export const BoxOptionsJss = styled.div(() => {
    const theme = useContext(ThemeContext);

    return {
        background: theme.pallete.background.colorBgElevated,
        padding: 8,
        cursor: 'pointer',
        margin: 4,
        borderRadius: 8,
        maxWidth: 250,
        minWidth: 150,

        ':hover': {
            background: theme.pallete.fill.colorFillSecondary,
        }
    }
})

export const BoxDropdownJss = styled.div<{ dropUp: boolean }>(({
    dropUp,
}) => {
    const theme = useContext(ThemeContext);

    return {
        border: 'none',
        position: 'absolute',
        top: dropUp ? 'auto' : '100%',
        bottom: dropUp ? '100%' : 'auto',
        left: 0,
        borderRadius: 8,
        backgroundColor: '#fff',
        boxShadow: theme.pallete.shadow.secondarySadow,
        zIndex: 1000,
    }
})