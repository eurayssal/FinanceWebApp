import React, { useState } from 'react';
import SiteLayout from '../_layout';
import Form from '../../components/form';
import { useNavigate } from 'react-router-dom';
import hookApi from '../../hooks/api';
import Input from '../../components/input';
import Button from '../../components/button';
import DisplayFlex from '../../components/display/display-flex';

const LoginView: React.FC = () => {
    const api = hookApi();
    const navigate = useNavigate(); // Para redirecionar após o login
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    // A função de login será usada dentro do contexto do Form
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            const response = await api.post('/api/usuario/login', {
                email,
                senha,
            });

            localStorage.setItem('token', response.data.accessToken);
            navigate('/app/home'); // Redireciona para o home após o login
        } catch (err) {
            setError('Login falhou. Verifique suas credenciais.');
        }
    };

    return (<SiteLayout>
        <DisplayFlex height='100vh' justifyContent='center' alignItems='center'>
            <Form onSubmitAsync={handleLogin}>
                <DisplayFlex flexDirection='column' gap={16}>
                    <Input label='E-mail' name='email' type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <Input label='Senha' name='senha' type="password" value={senha}
                        onChange={(e) => setSenha(e.target.value)} required />

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button text='Entrar' type='submit' />
                    <Button text='Cadastrar' variant='link' onClick={() => navigate('/site/cadastrar')} />
                </DisplayFlex>
            </Form>
        </DisplayFlex>

    </SiteLayout>);
};

export default LoginView;
