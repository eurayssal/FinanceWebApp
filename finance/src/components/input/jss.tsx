import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts";
import { IInputUiProps } from "./props";

export const InputJss = styled.input(() => {
    const theme = useContext(ThemeContext);

    return {
        padding: 4,
        height: 30,
        border: '1px solid',
        borderColor: theme.pallete.colorBorder.colorBorder,
        borderRadius: 6,
        backgroundColor: theme.pallete.background.colorBgContainer,

        ':focus': {
            border: '1px solid',
            borderColor: theme.pallete.colorPrimary.colorPrimary
        },

        ':hover': {
            border: '1px solid',
            borderColor: theme.pallete.colorPrimary.colorPrimaryHover
        }
    }
})

export const ContainerJss = styled.div<IInputUiProps>(({
    minWidth, width, maxWidth
}) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth,
        width,
        maxWidth
    };
})
