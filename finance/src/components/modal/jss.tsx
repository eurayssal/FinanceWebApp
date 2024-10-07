import styled from "@emotion/styled";
import ThemeContext from "../../contexts";
import { useContext } from "react";



export const DropModalJss = styled.div(function () {
    const theme = useContext(ThemeContext);

    return {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.pallete.background.colorBgMask,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
});

export const ModalBoxJss = styled.div(function () {
    const theme = useContext(ThemeContext);
    return {
        display: 'flex',
        backgroundColor: theme.pallete.background.colorBgElevated,
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
        position: 'relative',
    };
});

export const ModalHeader = styled.div(() => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
});

export const ModalContent = styled.div(() => {
    return {
        marginTop: '16px',
    };
});