import { InputHTMLAttributes } from "react";

export interface IInputCoreProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;
}