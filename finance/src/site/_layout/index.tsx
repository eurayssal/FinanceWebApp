import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer } from './jss'
import ThemeProvider from '../../contexts/provider'

const SiteLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (<AppLayoutJss>
        <ThemeProvider>
            {children}
            <Footer>© Finance Club</Footer>
        </ThemeProvider>
    </AppLayoutJss>)
}

export default SiteLayout