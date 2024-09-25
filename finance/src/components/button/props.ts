export type buttonVariant = 'primary' | 'secondary' | 'white' | 'borderWhite' | 'text' | 'link' | 'linkWhite' | 'icon' | 'danger';

export default interface IButtonUiProps {
    text?: string;
    variant?: buttonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
