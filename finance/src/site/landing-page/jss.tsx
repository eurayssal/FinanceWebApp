import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "../../contexts";

export const CtaJss = styled.button(() => {
    const theme = useContext(ThemeContext);

    return {
        display: "flex",
        alignItems: 'center',
        gap: 10,
        color: theme.pallete.colorPrimary.colorPrimary,
        backgroundColor: theme.pallete.background.colorBgContainer,
        border: 'none',
        fontWeight: 600,
        padding: 16,
        borderRadius: 8,
        boxShadow: '4px 4px 7px rgb(5 145 255 / 43%)'
    }
})

export const BannerJss = styled.div(() => {
    const theme = useContext(ThemeContext);

    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 64,
        padding: 32,
        backgroundColor: theme.pallete.colorPrimary.colorPrimary,
        color: theme.pallete.colorText.colorTextBase,
    }
})

export const ImgBanner1Jss = styled.img(() => {
    return{
        width: 350
    }
})
