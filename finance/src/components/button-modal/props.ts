import { PropsWithChildren } from "react";
import { IModalContentProps } from "../modal/props";
import IButtonUiProps from "../button/props";

export interface IModalUiProsp<T = any> extends PropsWithChildren {
    model: T;
    onClose: () => void;
}

export interface IButtonModalUiProps extends IButtonUiProps {
    modal: React.FC<IModalContentProps>
    model: any;
    onReload?: () => void;
}