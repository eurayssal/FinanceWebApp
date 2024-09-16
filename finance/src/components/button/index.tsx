import React from "react";
import IButtonUiProps from "./props";

const ButtonUi: React.FC<IButtonUiProps> = ({
    text, onClick
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick(event);
    };

    return (<button onClick={handleClick}>
        {text}
    </button>)
}

export default ButtonUi;
