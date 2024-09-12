export default interface IButtonProps {
    text?: string;
    // variant?: variantType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}