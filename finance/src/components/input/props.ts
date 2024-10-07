import { InputHTMLAttributes } from "react";

export interface IInputUiProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};