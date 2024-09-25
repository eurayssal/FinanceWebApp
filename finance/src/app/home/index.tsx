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
        <div>HomeView</div>
        <ButtonModalUi variant='danger' modal={ModalTeste} text='dsadsa'></ButtonModalUi>
        <ButtonUi text='Ola' variant='icon' icon={FaAngellist}></ButtonUi>
    </AppLayout>)
}

export default HomeView