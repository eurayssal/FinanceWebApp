import React from 'react';
import * as jss from './jss';
import { IDisplayGridProps } from './props';

const DisplayGridUi: React.FC<IDisplayGridProps> = (props) => {
    return (<jss.DisplayGridJss {...props} />);
};

export default DisplayGridUi;