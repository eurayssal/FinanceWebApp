import { ChangeEvent, InputHTMLAttributes } from "react";

export interface IInputMoneyProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    value?: number;
    onChange?: (value: number | ChangeEvent<HTMLInputElement>) => void;
}