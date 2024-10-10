import React, { PropsWithChildren } from 'react'
import { FormContext } from './model';

interface IFormProps extends PropsWithChildren {
    onSubmitAsync: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const Form: React.FC<IFormProps> = (props) => {
    const { children, onSubmitAsync } = props

    const handleSubmitAsync = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmitAsync(event);
    }

    return (<FormContext.Provider value={{ onSubmitAsync }}>
        <form onSubmit={handleSubmitAsync}>
            {children}
        </form >
    </FormContext.Provider>)
};

export default Form