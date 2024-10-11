import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, LogoJss, RigthConteiner, TopBar } from './jss'
import ThemeProvider from '../../contexts/provider'
import ToggleThemeButton from '../../contexts/toggleThemeButton';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import LogoColorida from '../../assets/logo-colorida.svg';

const AppLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/site/entrar'); // Redireciona para a página de login após o logout
    };

    return (<AppLayoutJss>
        <ThemeProvider>
            <TopBar>
                <RigthConteiner>
                    {/* <LogoJss src={LogoColorida} /> */}
                </RigthConteiner>
                <LeftConteiner>
                    <ToggleThemeButton />
                    <Button text='Sair' variant='danger' title='Sair' onClick={handleLogout} />
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