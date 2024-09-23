import React from 'react'
import { IButtonModalUiProps } from './props'
import ButtonUi from '../button';
import ModalUi from '../modal';

const ButtonModalUi: React.FC<IButtonModalUiProps> = (props) => {
    const { modal, onReload, titleModal, ...buttonUiProps } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const modalProps = { onClose: handleClose, onReload }

    return (<>
        <ButtonUi {...buttonUiProps} onClick={handleOpen} />
        <ModalUi title={titleModal} content={modal} open={open} {...modalProps} />
    </>)
}

export default ButtonModalUi