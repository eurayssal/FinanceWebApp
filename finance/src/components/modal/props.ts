import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
    title?: string;
    content: React.FC<IModalContentProps>;
    onClose: () => void;
    open?: boolean;
}

export interface IModalContentProps<T = any> extends PropsWithChildren {
    onClose: () => void;
    onReload?: () => void;
}