import React from 'react';
import * as jss from './jss';
import { IModalLayoutProps } from './props';
import ButtonUi from '../button';
import FormUi from '../form';

const ModalLayout: React.FC<IModalLayoutProps> = ({
    title, children, onClose
}) => {
    return (<jss.ModalBoxJss onClick={(e) => e.stopPropagation()}>
        <jss.ModalHeader>
            <h3>{title}</h3>
            <ButtonUi onClick={onClose} variant='text' text='X' />
        </jss.ModalHeader>
        <jss.ModalContent>
            {children}
        </jss.ModalContent>
    </jss.ModalBoxJss>);
};

export default ModalLayout;
