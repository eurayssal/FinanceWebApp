import styled from "@emotion/styled";
import { IDisplayFlexProps, IDisplayGridProps } from './props'

export const DisplayFlexJss = styled.div<IDisplayFlexProps>((
    { flexDirection, justifyContent, alignItems, flexWrap, gap, width, height, maxWidth,maxHeight, minHeight, minWidth }
) => {
    return {
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap,
        width,
        height,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth
    }
})

export const DisplayGridJss = styled.div<IDisplayGridProps>(({
    flexDirection, justifyContent, alignItems = 'center', gap = 8, width = 300
}) => {
    return {
        display: 'grid',
        flexDirection,
        justifyContent,
        alignItems,
        gap,
        gridTemplateColumns: `repeat(auto-fit, minmax(${width}px, auto))`
    };
});