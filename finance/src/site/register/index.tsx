import React, { useState } from 'react'
import hookApi from '../../hooks/api'
import { useNavigate } from 'react-router-dom';
import SiteLayout from '../_layout';
import DisplayFlex from '../../components/display/display-flex';
import FormUi from '../../components/form';
import Input from '../../components/input';
import ButtonUi from '../../components/button';
import { ParagraphJss, SectionJss, TitleJss, SubTitleJss } from './jss';

const RegisterView: React.FC = () => {
    const api = hookApi();

    const navigate = useNavigate();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmSenha, setConfirmSenha] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async () => {
        try {
            await api.post('/api/usuario/register', {
                nome,
                email,
                senha,
                confirmSenha
            });

            navigate('/app/entrar');
        } catch (err) {
            setError('Falha ao registrar usuário.')
        }
    }

    return (<SiteLayout>
        <DisplayFlex height='90vh' justifyContent='center' alignItems='center' flexDirection='column'>
            <SectionJss>
                <FormUi onSubmitAsync={handleRegister}>
                    <DisplayFlex flexDirection='column' gap={32} alignItems='center'>

                        <DisplayFlex flexDirection='column' alignItems='center' gap={32} width={300}>
                            <TitleJss>Criar conta</TitleJss>
                            <SubTitleJss>Crie sua conta para começar a controlar sua </SubTitleJss>
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <Input label='Nome' name='nome' value={nome} minWidth={350} maxWidth={350}
                                onChange={(e) => setNome(e.target.value)} required />
                            <Input label='E-mail' name='email' type="email" value={email} minWidth={350} maxWidth={350}
                                onChange={(e) => setEmail(e.target.value)} required />
                            <Input label='Senha' name='senha' type="password" value={senha} minWidth={350} maxWidth={350}
                                onChange={(e) => setSenha(e.target.value)} required />
                            <Input label='Confirmação de senha' name='confirm-senha' type="password" value={confirmSenha}
                                minWidth={350} maxWidth={350} onChange={(e) => setConfirmSenha(e.target.value)} required />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </DisplayFlex>

                        <DisplayFlex flexDirection='column' gap={16}>
                            <ButtonUi text='Entrar' type='submit' />
                            <DisplayFlex alignItems='center'>
                                <ParagraphJss>Já possui uma conta?</ParagraphJss>
                                <ButtonUi text='Entrar' variant='link' onClick={() => navigate('/site/entrar')} />
                            </DisplayFlex>
                        </DisplayFlex>
                    </DisplayFlex>
                </FormUi>
            </SectionJss>
        </DisplayFlex>

    </SiteLayout>);
};

export default RegisterView