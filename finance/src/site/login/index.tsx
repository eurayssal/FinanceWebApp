import React, { useState } from 'react';
import SiteLayout from '../_layout';
import Form from '../../components/form';
import { useNavigate } from 'react-router-dom';
import hookApi from '../../hooks/api';
import Input from '../../components/input';
import Button from '../../components/button';
import DisplayFlex from '../../components/display/display-flex';
import { LogoJss, ParagraphJss, SectionJss, TitleJss } from './jss';
import LogoColorida from '../../assets/logo-colorida.svg';

const LoginView: React.FC = () => {
    const api = hookApi();

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    // A função de login será usada dentro do contexto do Form
    const handleLogin = async () => {
        try {
            const response = await api.post('/api/usuario/login', {
                email,
                senha,
            });

            localStorage.setItem('token', response.data.accessToken);
            navigate('/app/home');
        } catch (err) {
            setError('Login falhou. Verifique suas credenciais.');
        }
    };

    return (<SiteLayout>
        <DisplayFlex height='90vh' justifyContent='center' alignItems='center' flexDirection='column'>
            <SectionJss>
                <Form onSubmitAsync={handleLogin}>
                    <DisplayFlex flexDirection='column' gap={32} alignItems='center'>

                        <DisplayFlex flexDirection='column' alignItems='center' gap={32}>
                            <LogoJss src={LogoColorida} onClick={() => navigate('/')} />
                            <TitleJss>Acesse sua conta</TitleJss>
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <Input maxLength={2} label='Seu e-mail' name='email' type="email" value={email} minWidth={350} maxWidth={350}
                                onChange={(e) => setEmail(e.target.value)} required />
                            <Input label='Sua senha' name='senha' type="password" value={senha} minWidth={350} maxWidth={350}
                                onChange={(e) => setSenha(e.target.value)} required />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <Button text='Entrar' type='submit' />
                            <DisplayFlex alignItems='center'>
                                <ParagraphJss>Ainda não possui conta?</ParagraphJss>
                                <Button text='Faça o cadastro!' variant='link' onClick={() => navigate('/site/cadastrar')} />
                            </DisplayFlex>
                        </DisplayFlex>
                    </DisplayFlex>
                </Form>
            </SectionJss>
        </DisplayFlex>

    </SiteLayout>);
};

export default LoginView;
