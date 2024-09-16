export default interface IButtonUiProps {
    text?: string;
    // variant?: variantType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}