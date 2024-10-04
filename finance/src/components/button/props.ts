import { IconType } from "react-icons";

export type buttonVariant = 'primary' | 'secondary' | 'danger' | 'text' | 'link' | 'icon';
export type iconPosition = 'start' | 'end'
export default interface IButtonUiProps {
    text?: string;
    icon?: IconType;
    variant?: buttonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    iconPosition?: iconPosition;
    hasIcon?: boolean;
}

export interface IconProps {
    icon: IconType;
}
