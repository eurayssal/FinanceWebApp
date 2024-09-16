import React, { PropsWithChildren } from 'react'
import * as jss from './jss';
import ButtonUi from '../button';
import { IModalProps } from './props';

const ModalUi: React.FC<IModalProps> = ({
    title, content: ModalContent, onClose, open }) => {

    const [isOpen, setIsOpen] = React.useState(true);

    const handleCloseModal = () => {
        setIsOpen(!isOpen);
    };
    const modalContentProps = { onClose: handleCloseModal };

    return (<jss.DropModalJss onClick={onClose}>
        <jss.ModalBoxJss onClick={(e) => e.stopPropagation()}>
            <jss.ModalHeader>
                <h3>{title}</h3>
                <ButtonUi onClick={handleCloseModal} text='X' />
            </jss.ModalHeader>
            <jss.ModalContent>
                <ModalContent {...modalContentProps} />
            </jss.ModalContent>
        </jss.ModalBoxJss>
    </jss.DropModalJss>)
}

export default ModalUi