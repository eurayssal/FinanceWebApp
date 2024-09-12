import React, { PropsWithChildren } from "react";
import { Global } from "@emotion/react";

const ThemeJss: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (<>
        <Global styles={{
            '*': {
                margin: 0,
                padding: 0,
                outline: 0,

                fontFamily: "'Poppins', 'sans-Serif'",
            },

            'html, body': {
                height: '100%'
            },

            'body': {
                backgroundColor: 'white'
            }
        }} />
        {children}
    </>
    )
}

export default ThemeJss