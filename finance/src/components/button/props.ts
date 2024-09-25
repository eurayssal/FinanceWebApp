import { IconType } from "react-icons";

export type buttonVariant = 'primary' | 'secondary' | 'white' | 'borderWhite' | 'text' | 'link' | 'linkWhite' | 'icon' | 'danger';

export default interface IButtonUiProps {
    text?: string;
    icon?: IconType;
    variant?: buttonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IconProps {
    icon: IconType;
}
