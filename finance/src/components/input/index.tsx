import React from 'react'
import Label from '../typography/label'
import DisplayFlex from '../display/display-flex'
import { IInputProps } from './props';
import { ContainerJss, InputJss } from './jss';

const Input: React.FC<IInputProps> = (props) => {
    const { name, label, minWidth = '0%', width = '100%', required,
        maxWidth = '100%', onBlur, onFocus, onChange } = props;
    //TODO: Implementar todas as props do IInputProps (criar validação para min e max)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        onBlur && onBlur(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        onFocus && onFocus(event);
    };

    const id = `fc-${name}`;
    const containerProps = { minWidth, width, maxWidth };

    return (<ContainerJss name={`container-${id}`} {...containerProps}>
        <DisplayFlex gap={8} alignItems='center'>
            {label && <Label>{label} {required && <>*</>}</Label>}
        </DisplayFlex>
        <InputJss {...props} key={id} name={name} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} />
    </ContainerJss>)
}

export default Input