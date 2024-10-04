import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, RigthConteiner, TopBar } from './jss'
import ThemeProvider from '../../contexts/provider'

const AppLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    function handleToggleDarkMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (<AppLayoutJss>
        <ThemeProvider toggle={isDarkMode}>
            <TopBar>
                <RigthConteiner>
                    {/* <LogoImg onClick={toLandingPage} src={Logo} /> */}
                </RigthConteiner>
                <LeftConteiner>
                    <button onClick={handleToggleDarkMode}>
                        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </LeftConteiner>
            </TopBar>

            <LayoutContainerJss>
                {children}
            </LayoutContainerJss>

            <Footer>© Finance Club</Footer>
        </ThemeProvider>
    </AppLayoutJss>)
}

export default AppLayout