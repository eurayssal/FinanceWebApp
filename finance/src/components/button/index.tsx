import React from "react";
import IButtonUiProps, { IconProps } from "./props";
import { BoxButtonJss, ButtonJss } from "./jss";

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
    return <IconComponent />
}

const ButtonUi: React.FC<IButtonUiProps> = ({
    text, onClick, variant = 'primary', type = 'submit', icon, iconPosition = 'start'
}) => {
    var variantProp = icon ? 'icon' : variant
    return (<ButtonJss onClick={onClick} variant={variantProp} hasIcon={!!icon} iconPosition={iconPosition} type={type}>
        {icon && iconPosition === "start" && <BoxButtonJss>
            <Icon icon={icon} />
        </BoxButtonJss>}
        {text}
        {icon && iconPosition === "end" && <BoxButtonJss>
            <Icon icon={icon} />
        </BoxButtonJss>}
    </ButtonJss>)
}

export default ButtonUi;
