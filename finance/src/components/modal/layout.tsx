import React from 'react'
import { Form } from 'react-router-dom'
import * as jss from './jss'
import { IModalLayoutProps } from './props'
import Button from '../button'

const ModalLayout:React.FC<IModalLayoutProps> = ({
    title, children, onClose
}) => {

  return (<jss.ModalBoxJss>     
     <jss.ModalHeader>
            <h3>{title}</h3>
           <Button onClick={onClose} variant='text' text='X' />
    </jss.ModalHeader>

    <jss.ModalContent>
        {children}
    </jss.ModalContent>
    </jss.ModalBoxJss>)
}

export default ModalLayout