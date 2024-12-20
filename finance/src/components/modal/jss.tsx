import styled from "@emotion/styled";
import ThemeContext from "../../contexts/theme";
import { useContext } from "react";



export const DropModalJss = styled.div((props) => {
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
        overflow: 'hidden'
    };
});

export const ModalBoxJss = styled.div((props) => {
    const theme = useContext(ThemeContext);
    return {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.pallete.background.colorBgElevated,
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
        position: 'relative',
        overflowY: 'auto'
    };
});

export const ModalHeader = styled.div(() => {
    return {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
});

export const ModalContent = styled.div(() => {
    return {
        marginTop: '16px',
    };
});