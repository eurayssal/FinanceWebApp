import React from 'react'
import Label from '../typography/label'
import DisplayFlex from '../display/display-flex'
import { IInputProps } from './props';
import { ContainerJss, InputJss } from './jss';

const Input: React.FC<IInputProps> = (props) => {
    const { name, label, minWidth = '0%', width = '100%', required, maxLength, value,
        maxWidth = '100%', onBlur, onFocus, onChange } = props;
    //TODO: Implementar todas as props do IInputProps (criar validação para min e max)
    // const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        onBlur && onBlur(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        onFocus && onFocus(event);
    };

    //Possivel validação de min e max lenght
    // const validate = (value: string) => {
    //     if (maxLength && !mold.maxLength(value, maxLength)) {
    //         setError('Num deu')
    //     }
    // }

    // useEffect(() => {
    //     if (value) {
    //         validate(value)
    //     }
    // }, []);

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