import styled from "@emotion/styled";
import IButtonUiProps from "./props";
import { useContext } from "react";
import ThemeContext from "../../contexts";

export const ButtonJss = styled.button<IButtonUiProps>(({ variant }) => {
    const theme = useContext(ThemeContext);

    let baseStyles = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        height: '32px',
    };

    const variants = {
        primary: {
            cursor: 'pointer',
            display: 'flex',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            backgroundColor: theme.pallete.colorPrimary.colorPrimary,
            color: theme.pallete.colorText.colorTextBase,
            alignItems: 'center',
            borderRadius: '6px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 15px',
            boxShadow: theme.pallete.shadow.primaryShadow,
            gap: 8,
            //TODO: animação de clique
            ':active': {
                backgroundColor: theme.pallete.colorPrimary.colorPrimaryActive,
            },
            ':hover': {
                backgroundColor: theme.pallete.colorPrimary.colorPrimaryHover,
            },
            ':focus-visible': {
                outline: `3px solid ${theme.pallete.colorPrimary.colorPrimaryBorder}`,
                outlineOffset: '1px',
                transition: 'outline-offset 0s, outline 0s',
            },
        },
        secondary: {
            cursor: 'pointer',
            color: theme.pallete.colorText.colorText,
            backgroundColor: theme.pallete.background.colorBgContainer,
            border: '1px solid',
            borderColor: theme.pallete.colorBorder.colorBorder,
            alignItems: 'center',
            borderRadius: '6px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 15px',
            boxShadow: theme.pallete.shadow.defaultShadow,
            ':active': {
                border: '1px solid',
                color: theme.pallete.colorPrimary.colorPrimaryTextActive,
                borderColor: theme.pallete.colorPrimary.colorPrimaryActive,
            },
            ':hover': {
                border: '1px solid',
                color: theme.pallete.colorPrimary.colorPrimaryHover,
                borderColor: theme.pallete.colorPrimary.colorPrimaryHover,
            },
        },
        danger: {
            cursor: 'pointer',
            display: 'flex',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            backgroundColor: theme.pallete.colorError.colorError,
            color: theme.pallete.colorText.colorTextBase,
            alignItems: 'center',
            borderRadius: '6px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 15px',
            boxShadow: theme.pallete.shadow.dangerShadow,
            gap: 8,
            //TODO: animação de clique
            ':active': {
                backgroundColor: theme.pallete.colorError.colorErrorActive,
            },
            ':hover': {
                backgroundColor: theme.pallete.colorError.colorErrorHover,
            },
            ':focus-visible': {
                outline: `3px solid ${theme.pallete.colorPrimary.colorPrimaryBorder}`,
                outlineOffset: '1px',
                transition: 'outline-offset 0s, outline 0s',
            },
        },
        text: {
            cursor: 'pointer',
            color: theme.pallete.colorText.colorText,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            border: '1px transparent',
            alignItems: 'center',
            borderRadius: '6px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 15px',
            ':active': {
                backgroundColor: theme.pallete.fill.colorFill,
            },
            ':hover': {
                backgroundColor: theme.pallete.fill.colorFill,
            },
        },
        link: {
            cursor: 'pointer',
            display: 'flex',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            color: theme.pallete.colorPrimary.colorPrimary,
            alignItems: 'center',
            borderRadius: '6px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 15px',
            //TODO: animação de clique
            ':active': {
                color: theme.pallete.colorPrimary.colorPrimaryActive,
            },
            ':hover': {
                color: theme.pallete.colorPrimary.colorPrimaryHover,
            },
            ':focus-visible': {
                outline: `3px solid ${theme.pallete.colorPrimary.colorPrimaryBorder}`,
                outlineOffset: '1px',
                transition: 'outline-offset 0s, outline 0s',
            },
        },
        icon: {
            cursor: 'pointer',
            display: 'flex',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            backgroundColor: theme.pallete.colorPrimary.colorPrimary,
            color: theme.pallete.colorText.colorTextBase,
            alignItems: 'center',
            borderRadius: '50px',
            justifyContent: 'center',
            lineHeight: '22px',
            padding: '4px 8px',
            boxShadow: theme.pallete.shadow.primaryShadow,
            gap: 8,
            //TODO: animação de clique
            ':active': {
                backgroundColor: theme.pallete.colorPrimary.colorPrimaryActive,
            },
            ':hover': {
                backgroundColor: theme.pallete.colorPrimary.colorPrimaryHover,
            },
            ':focus-visible': {
                outline: `3px solid ${theme.pallete.colorPrimary.colorPrimaryBorder}`,
                outlineOffset: '1px',
                transition: 'outline-offset 0s, outline 0s',
            },
        },
    };

    return {
        ...(variant ? variants[variant] : {}),
        ...baseStyles,
    }
});

export const BoxButtonJss = styled.div(() => {
    return {}
})
