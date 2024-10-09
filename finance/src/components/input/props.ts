import { IInputCoreProps } from "./input.props-core";

export interface IInputProps extends IInputCoreProps {
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};