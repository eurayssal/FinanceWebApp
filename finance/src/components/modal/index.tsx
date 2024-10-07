import React from 'react'
import * as jss from './jss';
import ButtonUi from '../button';
import { IModalProps } from './props';

const ModalUi: React.FC<IModalProps> = ({
    title, content: ModalContent, onClose, open }) => {

    const modalContentProps = { onClose };
    if (!open) return null;
    //TODO: Colocar icone de info e sucesso.

    return (<jss.DropModalJss onClick={onClose}>
        <jss.ModalBoxJss onClick={(e) => e.stopPropagation()}>
            <jss.ModalHeader>
                <h3>{title}</h3>
                <ButtonUi onClick={onClose} variant='text' text='X' />
            </jss.ModalHeader>
            <jss.ModalContent>
                <ModalContent {...modalContentProps} />
            </jss.ModalContent>
        </jss.ModalBoxJss>
    </jss.DropModalJss>)
}

export default ModalUi