import React, { useState } from 'react';
import SiteLayout from '../_layout';
import FormUi from '../../components/form';
import { useNavigate } from 'react-router-dom';
import hookApi from '../../hooks/api';
import Input from '../../components/input';
import ButtonUi from '../../components/button';
import DisplayFlex from '../../components/display/display-flex';
import { LogoJss, ParagraphJss, SectionJss, TitleJss } from './jss';
import LogoColorida from '../../assets/logo-colorida.svg';

const LoginView: React.FC = () => {
    const api = hookApi();

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const response = await api.post('/api/usuario/login', {
                email,
                senha,
            });

            localStorage.setItem('token', response.data.accessToken);
            navigate('/app/home');
        } catch (err) {
            setError('E-mail ou senha inválidos.');
        }
    };

    return (<SiteLayout>
        <DisplayFlex height='90vh' justifyContent='center' alignItems='center' flexDirection='column'>
            <SectionJss>
                <FormUi onSubmitAsync={handleLogin}>
                    <DisplayFlex flexDirection='column' gap={32} alignItems='center'>

                        <DisplayFlex flexDirection='column' alignItems='center' gap={32}>
                            <TitleJss>Acesse sua conta</TitleJss>
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <Input label='E-mail' name='email' type="email" value={email} minWidth={350} maxWidth={350}
                                onChange={(e) => setEmail(e.target.value)} required />
                            <Input label='Senha' name='senha' type="password" value={senha} minWidth={350} maxWidth={350}
                                onChange={(e) => setSenha(e.target.value)} required />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <ButtonUi text='Entrar' type='submit' />
                            <DisplayFlex alignItems='center'>
                                <ParagraphJss>Ainda não possui conta?</ParagraphJss>
                                <ButtonUi text='Faça o cadastro!' variant='link' onClick={() => navigate('/site/registrar')} />
                            </DisplayFlex>
                        </DisplayFlex>
                    </DisplayFlex>
                </FormUi>
            </SectionJss>
        </DisplayFlex>

    </SiteLayout>);
};

export default LoginView;
