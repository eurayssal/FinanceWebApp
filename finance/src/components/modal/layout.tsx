import React from 'react';
import * as jss from './jss';
import { IModalLayoutProps } from './props';
import Button from '../button';
import FormUi from '../form';

const ModalLayout: React.FC<IModalLayoutProps> = ({
    title, children, onClose, onSubmitAsync
}) => {
    return (<FormUi onSubmitAsync={onSubmitAsync}>
            <jss.ModalBoxJss onClick={(e) => e.stopPropagation()}>
                <jss.ModalHeader>
                    <h3>{title}</h3>
                    <Button onClick={onClose} variant='text' text='X' />
                </jss.ModalHeader>
                <jss.ModalContent>
                    {children}
                </jss.ModalContent>
            </jss.ModalBoxJss>
        </FormUi>);
};

export default ModalLayout;
