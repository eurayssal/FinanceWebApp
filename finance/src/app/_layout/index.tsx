import React, { PropsWithChildren } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, RigthConteiner, TopBar } from './jss'
import ThemeProvider from '../../contexts/provider'
import ToggleThemeButton from '../../contexts/toggleThemeButton';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';

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
                    {/* <LogoImg onClick={toLandingPage} src={Logo} /> */}
                    <Button text='Sair' variant='danger' onClick={handleLogout} />
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