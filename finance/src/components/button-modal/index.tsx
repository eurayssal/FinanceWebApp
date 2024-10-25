import React from 'react'
import { IButtonModalUiProps } from './props'
import Button from '../button';
import ModalUi from '../modal';

const ButtonModalUi: React.FC<IButtonModalUiProps> = (props) => {
    const { modal, onReload, ...buttonUiProps } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const modalProps = { onClose: handleClose, onReload }

    return (<>
        <Button {...buttonUiProps} onClick={handleOpen} />
        <ModalUi title='' content={modal} open={open} {...modalProps} />
    </>)
}

export default ButtonModalUi