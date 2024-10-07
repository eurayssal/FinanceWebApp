import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, RigthConteiner, TopBar } from './jss'
import ThemeProvider from '../../contexts/provider'
import ToggleThemeButton from '../../contexts/toggleThemeButton';

const AppLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (<AppLayoutJss>
        <ThemeProvider>
            <TopBar>
                <RigthConteiner>
                    {/* <LogoImg onClick={toLandingPage} src={Logo} /> */}
                </RigthConteiner>
                <LeftConteiner>
                    <ToggleThemeButton />
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