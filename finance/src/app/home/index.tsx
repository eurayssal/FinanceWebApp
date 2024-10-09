import React from 'react'
import AppLayout from '../_layout';
import ButtonModalUi from '../../components/button-modal';
import { IModalContentProps } from '../../components/modal/props';
import ButtonUi from '../../components/button';
import { FaAngellist } from "react-icons/fa6";
import Input from '../../components/input';
import InputMoney from '../../components/input-money';

const ModalTeste: React.FC<IModalContentProps> = () => {
    return (
        <>
            Olaaa
        </>
    )
}

const HomeView: React.FC = () => {
    return (<AppLayout>
        <div >HomeView

            <ButtonModalUi variant='primary' modal={ModalTeste} text='primary' titleModal='Teste'></ButtonModalUi>
            <ButtonModalUi variant='secondary' modal={ModalTeste} text='secondary' titleModal='Teste'></ButtonModalUi>
            <ButtonModalUi variant='text' modal={ModalTeste} text='text' titleModal='Teste'></ButtonModalUi>
            <ButtonModalUi variant='link' modal={ModalTeste} text='link' titleModal='Teste'></ButtonModalUi>
            <ButtonUi variant='icon' icon={FaAngellist} iconPosition='end' ></ButtonUi>
            <ButtonModalUi variant='danger' modal={ModalTeste} text='dsadsa' titleModal='Teste'></ButtonModalUi>
            <Input name={'sas'} label='Ola' required />
            <InputMoney label='AAA' name={'aaa'} required />
        </div>
    </AppLayout>)
}

export default HomeView