import React from 'react'
import { IDisplayFlexProps } from './props'
import * as jss from './jss'

const DisplayFlex: React.FC<IDisplayFlexProps> = (props) => {
    return (
        <jss.DisplayFlexJss {...props} />
    )
}

export default DisplayFlex