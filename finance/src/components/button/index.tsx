import React from "react";
import IButtonUiProps, { IconProps } from "./props";
import { BoxButtonJss, ButtonJss } from "./jss";

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
    return <IconComponent />
}

const ButtonUi: React.FC<IButtonUiProps> = ({
    text, onClick, variant, icon, iconPosition = 'start'
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick(event);
    };

    return (<ButtonJss onClick={handleClick} variant={variant} hasIcon={!!icon} iconPosition={iconPosition}>
        {icon && iconPosition === "start" && <BoxButtonJss>
            <Icon icon={icon} />
        </BoxButtonJss>}
        {text}
        {icon && iconPosition === "end" && <BoxButtonJss>
            icon && <Icon icon={icon} />
        </BoxButtonJss>}
    </ButtonJss>)
}

export default ButtonUi;
