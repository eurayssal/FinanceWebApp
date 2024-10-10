import React, { useContext, useState } from 'react'
import Input from '../../components/input'
import SiteLayout from '../_layout'
import Form from '../../components/form'
import hookApi from '../../hooks/api'
import { ILoginProps } from './props'
import { FormContext, HelperModel } from '../../components/form/model'
import Button from '../../components/button'

const LoginView: React.FC = () => {
    const api = hookApi();

    const context = useContext(FormContext)

    React.useEffect(() => {
        var x = context.getModel('email')
        console.log('x', x)
    }, []);
    const handleSubmit = async (event: React.FormEvent) => {
        const response = await api.post('api/usuario/login',);
        // Salva o token no localStorage (ou outro método de sua escolha)
        localStorage.setItem('token', response.data.AccessToken);
        alert('Login realizado com sucesso!');
    }


    return (<SiteLayout>
        <Form onSubmitAsync={handleSubmit}>
            <Input name={'email'} label='E-mail' />
            <Input name={'senha'} label='Senha' type='password' />
            <Button text='Entrar' type='submit' />
        </Form>
    </SiteLayout>)
}

export default LoginView