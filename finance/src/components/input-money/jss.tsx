import styled from "@emotion/styled";
import { IInputMoneyProps } from "./props";

export const ContainerJss = styled.div<IInputMoneyProps>(({
    minWidth, width, maxWidth
}) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        minWidth,
        width,
        maxWidth
    };
})