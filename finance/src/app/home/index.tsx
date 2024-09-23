import React from 'react'
import AppLayout from '../_layout';
import ButtonModalUi from '../../components/button-modal';
import { IModalContentProps } from '../../components/modal/props';

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
        <ButtonModalUi modal={ModalTeste} text='dsadsa'></ButtonModalUi>
    </AppLayout>)
}

export default HomeView