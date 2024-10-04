import { IconType } from "react-icons";

export type buttonVariant = 'primary' | 'secondary' | 'white' | 'borderWhite' | 'text' | 'link' | 'linkWhite' | 'icon' | 'danger';
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
