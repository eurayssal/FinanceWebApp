import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, RigthConteiner, TopBar } from './jss'
import { ThemeContext } from '@emotion/react';

const AppLayout: React.FC<PropsWithChildren> = ({
    children
}) => {

    return (<AppLayoutJss>
        <TopBar>
            <RigthConteiner>
                {/* <LogoImg onClick={toLandingPage} src={Logo} /> */}
            </RigthConteiner>
            <LeftConteiner>

            </LeftConteiner>
        </TopBar>

        <LayoutContainerJss>
            {children}
        </LayoutContainerJss>

        <Footer>© Finance Club</Footer>
    </AppLayoutJss>)
}

export default AppLayout