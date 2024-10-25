import React from 'react'
import * as jss from './jss';
import Button from '../button';
import { IModalProps } from './props';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import ModalLayout from './layout';

const ModalUi: React.FC<IModalProps> = ({
    title, content: ModalContent, onClose, open
}) => {
    useLockBodyScroll(!!open);
    const modalContentProps = { onClose };
    if (!open) return null;
    //TODO: Colocar icone de info e sucesso.

    return (<jss.DropModalJss onClick={onClose} aria-modal>
            <jss.ModalContent>
                <ModalContent {...modalContentProps} />
            </jss.ModalContent>
    </jss.DropModalJss>)
}

export default ModalUi