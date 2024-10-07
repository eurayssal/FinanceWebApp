import React from 'react'
import { ContainerJss, InputJss } from './jss'
import Label from '../typography/label'
import { IInputUiProps } from './props'
import DisplayFlexUi from '../display/display-flex'

const InputUi: React.FC<IInputUiProps> = (props) => {
    const { name, label, minWidth = '0%', width = '100%', required,
        maxWidth = '100%', onBlur, onFocus, onChange } = props;
    //TODO: Implementar todas as props do IInputUiProps
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
        <DisplayFlexUi gap={8} alignItems='center'>
            <Label>{label}</Label>
            {required && <>*</>}
        </DisplayFlexUi>
        <InputJss {...props} key={id} name={name} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur} />
    </ContainerJss>)
}

export default InputUi