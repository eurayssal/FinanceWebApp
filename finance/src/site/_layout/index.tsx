import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer } from './jss'
import ThemeProvider from '../../contexts/theme/provider'
import { LeftConteiner, LogoJss, RigthConteiner, TopBar } from '../../app/_layout/jss'
import { useNavigate } from 'react-router-dom'
import ButtonUi from '../../components/button'
import LogoColorida from '../../assets/logo-colorida.svg';

const SiteLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const navigate = useNavigate();

    const navigateToLogin = () => navigate('/site/entrar');
    const navigateToRegister = () => navigate('/site/registrar');

    return (<AppLayoutJss>
        <ThemeProvider>
            <TopBar>
                <RigthConteiner>
                    <LogoJss src={LogoColorida} />
                </RigthConteiner>
                <LeftConteiner>
                    <ButtonUi text='Registrar' variant='secondary' onClick={navigateToRegister} />
                    <ButtonUi text='Entrar' onClick={navigateToLogin} />
                </LeftConteiner>
            </TopBar>
            {children}
            <Footer>© Finance Club</Footer>
        </ThemeProvider>
    </AppLayoutJss>)
}

export default SiteLayout