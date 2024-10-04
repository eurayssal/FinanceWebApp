import React from 'react'
import AppLayout from '../_layout';
import ButtonModalUi from '../../components/button-modal';
import { IModalContentProps } from '../../components/modal/props';
import ButtonUi from '../../components/button';
import { FaAngellist } from "react-icons/fa6";

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

            <ButtonModalUi variant='primary' modal={ModalTeste} text='primary'></ButtonModalUi>
            <ButtonModalUi variant='secondary' modal={ModalTeste} text='secondary'></ButtonModalUi>
            <ButtonModalUi variant='text' modal={ModalTeste} text='text'></ButtonModalUi>
            <ButtonModalUi variant='link' modal={ModalTeste} text='link'></ButtonModalUi>
            <ButtonUi variant='icon' icon={FaAngellist} iconPosition='end'></ButtonUi>
            <ButtonModalUi variant='danger' modal={ModalTeste} text='dsadsa'></ButtonModalUi>
        </div>
    </AppLayout>)
}

export default HomeView