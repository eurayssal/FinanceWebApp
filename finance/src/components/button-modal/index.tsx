import React from 'react'
import { IButtonModalUiProps } from './props'
import ButtonUi from '../button';
import ModalUi from '../modal';

const ButtonModalUi: React.FC<IButtonModalUiProps> = (props) => {
    const { modal, model, onReload, ...buttonUiProps } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const modalProps = { model, onClose: handleClose, onReload }

    return (<>
        <ButtonUi {...buttonUiProps} />
        {/* <ModalUi onClose={function (): void {
            throw new Error('Function not implemented.');
        } } /> */}
    </>)
}

export default ButtonModalUi