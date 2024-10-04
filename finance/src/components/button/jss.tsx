import styled from "@emotion/styled";
import IButtonUiProps, { buttonVariant } from "./props";

const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 15px',
    borderRadius: '6px',
    fontSize: '14px',
    height: '32px',
    cursor: 'pointer',
};

const variants = {
    primary: {
        backgroundColor: '#1677ff',
        color: '#fff',
        border: 'none',
        ':active': {
            backgroundColor: '#0958d9',
        },
        ':hover': {
            backgroundColor: '#4096ff',
        },
        ':focus-visible': {
            outline: '4px solid #91caff',
            outlineOffset: '1px',
            transition: 'outline-offset 0s, outline 0s',
        },
    },
    secondary: {
        color: '#404040',
        backgroundColor: '#fff',
        border: '1px solid #d9d9d9',
        ':active': {
            color: '#0958d9',
            border: '1px solid #0958d9',
        },
        ':hover': {
            color: '#4096ff',
            border: '1px solid #4096ff',
        },
    },
    white: {
        color: '#0958D9',
        backgroundColor: '#fff',
        border: '1px solid #fff',
    },
    borderWhite: {
        color: '#fff',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
    },
    danger: {
        color: '#ff4d4f',
        backgroundColor: '#fff',
        border: '1px solid #ff4d4f',
        ':active': {
            color: '#d9363e',
        },
        ':hover': {
            color: '#ff7875',
            borderColor: '#ffa39e',
        },
    },
    text: {
        color: '#404040',
        backgroundColor: '#fff',
        borderColor: 'transparent',
        ':active': {
            backgroundColor: '#00000026',
        },
        ':hover': {
            backgroundColor: '#0000000f',
        },
    },
    link: {
        color: '#1677ff',
        backgroundColor: '#fff',
        borderColor: 'transparent',
        ':active': {
            color: '#0958d9',
        },
        ':hover': {
            color: '#69b1ff',
        },
    },
    linkWhite: {
        color: '#fff',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    icon: {
        backgroundColor: '#1677ff',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '60px',
        border: 'none',
        ':active': {
            backgroundColor: '#0958d9',
        },
        ':hover': {
            backgroundColor: '#4096ff',
        },
        ':focus-visible': {
            outline: '4px solid #91caff',
            outlineOffset: '1px',
            transition: 'outline-offset 0s, outline 0s',
        },
    },
};

export const ButtonJss = styled.button<IButtonUiProps>(({ variant, hasIcon }) => ({
    ...baseStyles,
    ...(variant ? variants[variant] : {}),
    gap: hasIcon ? 4 : 0
}));

export const BoxButtonJss = styled.div(() => {
    return {

    }
})
