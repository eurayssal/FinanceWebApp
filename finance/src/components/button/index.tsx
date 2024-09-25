import React from "react";
import IButtonUiProps, { IconProps } from "./props";
import { ButtonJss } from "./jss";

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
    return <IconComponent />
}

const ButtonUi: React.FC<IButtonUiProps> = ({
    text, onClick, variant, icon
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick(event);
    };

    return (<ButtonJss onClick={handleClick} variant={variant}>
        <div >
            {icon && <Icon icon={icon} />}
        </div>
        {text}
    </ButtonJss>)
}

export default ButtonUi;
