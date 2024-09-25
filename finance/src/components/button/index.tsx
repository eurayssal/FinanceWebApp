import React from "react";
import IButtonUiProps from "./props";
import { ButtonJss } from "./jss";


const ButtonUi: React.FC<IButtonUiProps> = ({
    text, onClick, variant
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick(event);
    };

    return (<ButtonJss onClick={handleClick} variant={variant}>
        {text}
    </ButtonJss>)
}

export default ButtonUi;
