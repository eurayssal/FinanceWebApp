import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
    title: string;
    content: React.FC<any>;
    onClose?: () => void;
    open?: boolean;
}

export interface IModalContentProps extends PropsWithChildren {
    onClose: () => void;
    onReload?: () => void;
}