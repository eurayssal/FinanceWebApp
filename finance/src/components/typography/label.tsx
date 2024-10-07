import styled from '@emotion/styled'
import React, { Children, PropsWithChildren } from 'react'

const LabelJss = styled.label(() => {
    return {
        fontWeight: 500,
        fontSize: 16
    }
})

const Label: React.FC<PropsWithChildren> = ({ children }) => {
    return (<LabelJss>{children}</LabelJss>)
}

export default Label