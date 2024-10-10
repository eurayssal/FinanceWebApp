import React from "react";
import IButtonUiProps, { IconProps } from "./props";
import { BoxButtonJss, ButtonJss } from "./jss";

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
    return <IconComponent />
}

const Button: React.FC<IButtonUiProps> = ({
    text, onClick, variant = 'primary', icon, iconPosition = 'start'
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick(event);
    };
    var variantProp = icon ? 'icon' : variant
    return (<ButtonJss onClick={handleClick} variant={variantProp} hasIcon={!!icon} iconPosition={iconPosition}>
        {icon && iconPosition === "start" && <BoxButtonJss>
            <Icon icon={icon} />
        </BoxButtonJss>}
        {text}
        {icon && iconPosition === "end" && <BoxButtonJss>
            <Icon icon={icon} />
        </BoxButtonJss>}
    </ButtonJss>)
}

export default Button;
