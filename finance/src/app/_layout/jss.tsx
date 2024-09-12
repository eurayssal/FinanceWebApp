import styled from "@emotion/styled";

//container Pai
export const AppLayoutJss = styled.div({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
});

// TopBar

export const TopBar = styled.div({
    paddingLeft: '2rem',
    paddingRight: '2rem',
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#0958D9',
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

export const Footer = styled.div({
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "12px",
    marginTop: "auto",
});

export const LayoutContainerJss = styled.div({
    margin: '16px'
})

export const LogoImg = styled.img({
    maxWidth: '150px',
    cursor: 'pointer'
})