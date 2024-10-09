import React, { useState } from 'react';
import Input from '../input';
import { maskMoney } from '../../utils/mold/money.mold';
import { IInputMoneyProps } from './props';
import { ContainerJss } from './jss';
import Label from '../typography/label';
import DisplayFlex from '../display/display-flex';

const InputMoney: React.FC<IInputMoneyProps> = (props) => {
  const { name, label, minWidth = '0%', width = '100%', required, maxWidth = '100%',
    onBlur, onFocus, onChange, value = 0 } = props;

  const [inputValue, setInputValue] = useState<string>(maskMoney(value));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue === '') {
      setInputValue(maskMoney(0));
      onChange && onChange(0);
      return;
    }

    const cleanValue = inputValue.replace(/[^\d]/g, '');
    const numericValue = parseFloat(cleanValue) / 100 as any;
    setInputValue(maskMoney(numericValue));
    onChange && onChange(numericValue);
  };

  const id = `fc-${name}`;
  const containerProps = { minWidth, width, maxWidth };

  return (<ContainerJss name={`container-${id}`} {...containerProps}>
    <DisplayFlex gap={8} alignItems='center'>
      {label && <Label>{label} {required && <>*</>}</Label>}
    </DisplayFlex>
    <Input {...containerProps} id={name} name={name} value={inputValue} onChange={handleChange}
      placeholder='R$ 0,00' required={required} onBlur={onBlur} onFocus={onFocus} />
  </ContainerJss>);
};

export default InputMoney;
