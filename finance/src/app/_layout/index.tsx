import React, { PropsWithChildren, startTransition } from 'react'
import { AppLayoutJss, Footer, LayoutContainerJss, LeftConteiner, RigthConteiner, TopBar } from './jss'
import ThemeProvider from '../../contexts/theme/provider'
import ToggleThemeButton from '../../contexts/theme/toggleThemeButton';
import ButtonUi from '../../components/button';
import { useNavigate } from 'react-router-dom';
import DropdownUi from '../../components/dropdown';

const AppLayout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        startTransition(() => {
            navigate('/site/entrar'); // Redireciona para a página de login após o logout
        })
    };

    return (<AppLayoutJss>
        <ThemeProvider>
            <TopBar>
                <RigthConteiner>
                    {/* <LogoJss src={LogoColorida} /> */}
                </RigthConteiner>
                <LeftConteiner>
                    <DropdownUi variant='link' text='Cadastros' options={[{ title: 'Cadastrar tag', onClick: () => navigate('/app/tag') }]} />
                    <ToggleThemeButton />
                    <ButtonUi text='Sair' variant='danger' title='Sair' onClick={handleLogout} />
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