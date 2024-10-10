import React from 'react'
import * as jss from './jss';
import Button from '../button';
import { IModalProps } from './props';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const ModalUi: React.FC<IModalProps> = ({
    title, content: ModalContent, onClose, open
}) => {
    useLockBodyScroll(!!open);
    const modalContentProps = { onClose };
    if (!open) return null;
    //TODO: Colocar icone de info e sucesso.

    return (<jss.DropModalJss onClick={onClose} aria-modal>
        <jss.ModalBoxJss onClick={(e) => e.stopPropagation()}>
            <jss.ModalHeader>
                <h3>{title}</h3>
                <Button onClick={onClose} variant='text' text='X' />
            </jss.ModalHeader>
            <jss.ModalContent>
                <ModalContent {...modalContentProps} />
            </jss.ModalContent>
        </jss.ModalBoxJss>
    </jss.DropModalJss>)
}

export default ModalUi