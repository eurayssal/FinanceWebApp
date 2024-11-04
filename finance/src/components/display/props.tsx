import { PropsWithChildren } from 'react';
import { directionType, justifyContentType, alignItemsType, flexWrapType } from './model';

export interface IDisplayFlexProps extends PropsWithChildren {
    flexDirection?: directionType,
    justifyContent?: justifyContentType,
    alignItems?: alignItemsType,
    flexWrap?: flexWrapType,
    gap?: number,
    width?: string | number,
    height?: string | number,
    maxWidth?: string | number,
    minWidth?: string | number,
    maxHeight?: string | number,
    minHeight?: string | number,
}

export interface IDisplayGridProps extends PropsWithChildren {
    flexDirection?: directionType;
    justifyContent?: justifyContentType;
    alignItems?: alignItemsType;
    gap?: number;
    width?: string | number
}