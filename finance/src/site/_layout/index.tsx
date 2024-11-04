import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer } from './jss'
import ThemeProvider from '../../contexts/provider'
import { LeftConteiner, LogoJss, RigthConteiner, TopBar } from '../../app/_layout/jss'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import LogoColorida from '../../assets/logo-colorida.svg';

const SiteLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const navigate = useNavigate();

    const handleClick = () => navigate('/site/entrar');

    return (<AppLayoutJss>
        <ThemeProvider>
            <TopBar>
                <RigthConteiner>
                    <LogoJss src={LogoColorida} />
                </RigthConteiner>
                <LeftConteiner>
                    <Button text='Registrar' variant='secondary' />
                    <Button text='Entrar' onClick={handleClick} />
                </LeftConteiner>
            </TopBar>
            {children}
            <Footer>© Finance Club</Footer>
        </ThemeProvider>
    </AppLayoutJss>)
}

export default SiteLayout