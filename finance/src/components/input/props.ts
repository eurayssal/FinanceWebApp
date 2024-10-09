import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;

    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};