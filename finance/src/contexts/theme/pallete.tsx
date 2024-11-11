import { ICurrentColorPallete } from "./props"


export function GetLightMode(): ICurrentColorPallete {
    return ({
        //Cores
        colorPrimary: {
            colorPrimaryBg: '#e6f4ff',
            colorPrimaryBgHover: '#bae0ff',
            colorPrimaryBorder: '#91caff',
            colorPrimaryBorderHover: '#69b1ff',
            colorPrimaryHover: '#4096ff',
            colorPrimary: '#1677ff',
            colorPrimaryActive: '#0958d9',
            colorPrimaryTextHover: '#4096ff',
            colorPrimaryText: '#1677ff',
            colorPrimaryTextActive: '#0958d9'
        },
        colorSuccess: {
            colorSuccessBg: '#f6ffed',
            colorSuccessBgHover: '#d9f7be',
            colorSuccessBorder: '#b7eb8f',
            colorSuccessBorderHover: '#95de64',
            colorSuccessHover: '#95de64',
            colorSuccess: '#52c41a',
            colorSuccessActive: '#389e0d',
            colorSuccessTextHover: '#73d13d',
            colorSuccessText: '#52c41a',
            colorSuccessTextActive: '#389e0d'
        },
        colorWarning: {
            colorWarningBg: '#fffbe6',
            colorWarningBgHover: '#fff1b8',
            colorWarningBorder: '#ffe58f',
            colorWarningBorderHover: '#ffd666',
            colorWarningHover: '#ffd666',
            colorWarning: '#faad14',
            colorWarningActive: '#d48806',
            colorWarningTextHover: '#ffc53d',
            colorWarningText: '#faad14',
            colorWarningTextActive: '#d48806'
        },
        colorError: {
            colorErrorBg: '#fff2f0',
            colorErrorBgHover: '#fff1f0',
            colorErrorBorder: '#ffccc7',
            colorErrorBorderHover: '#ffa39e',
            colorErrorHover: '#ff7875',
            colorError: '#ff4d4f',
            colorErrorActive: '#d9363e',
            colorErrorTextHover: '#ff7875',
            colorErrorText: '#ff4d4f',
            colorErrorTextActive: '#d9363e'
        },
        colorLink: {
            colorLinkHover: '#69b1ff',
            colorLinkActive: '#0958d9'
        },
        colorText: {
            colorTextBase: '#ffffff',
            colorText: 'rgba(0, 0, 0, 0.88)',
            colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
            colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
            colorTextQuaternary: 'rgba(0, 0, 0, 0.25)'
        },
        colorBorder: {
            colorBorder: '    #d9d9d9',
            colorBorderSecondary: '    #f0f0f0'
        },
        fill: {
            colorFill: 'rgba(0, 0, 0, 0.15)',
            colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
            colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
            colorFillQuaternary: 'rgba(0, 0, 0, 0.02)'
        },
        background: {
            colorBgBase: '#000000',
            colorBgContainer: '#ffffff',
            colorBgElevated: '#ffffff',
            colorBgLayout: '#f5f5f5',
            colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
            colorBgMask: 'rgba(0, 0, 0, 0.45)'
        },

        //Shadows
        shadow: {
            defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
            dangerShadow: '0 2px 0 rgba(255, 38, 5, 0.06)',
            primaryShadow: '0 2px 0 rgba(5, 145, 255, 0.1)'
        }
    })
}

export function GetDarkMode(): ICurrentColorPallete {
    return ({
        //Cores
        colorPrimary: {
            colorPrimaryBg: '#111a2c',
            colorPrimaryBgHover: '#112545',
            colorPrimaryBorder: '#15325b',
            colorPrimaryBorderHover: '#15417e',
            colorPrimaryHover: '#3c89e8',
            colorPrimary: '#1668dc',
            colorPrimaryActive: '#1554ad',
            colorPrimaryTextHover: '#3c89e8',
            colorPrimaryText: '#1668dc',
            colorPrimaryTextActive: '#1554ad'
        },
        colorSuccess: {
            colorSuccessBg: '#162312',
            colorSuccessBgHover: '#1d3712',
            colorSuccessBorder: '#274916',
            colorSuccessBorderHover: '#306317',
            colorSuccessHover: '#306317',
            colorSuccess: '#49aa19',
            colorSuccessActive: '#3c8618',
            colorSuccessTextHover: '#6abe39',
            colorSuccessText: '#49aa19',
            colorSuccessTextActive: '#3c8618'
        },
        colorWarning: {
            colorWarningBg: '#2b2111',
            colorWarningBgHover: '#443111',
            colorWarningBorder: '#594214',
            colorWarningBorderHover: '#7c5914',
            colorWarningHover: '#7c5914',
            colorWarning: '#d89614',
            colorWarningActive: '#aa7714',
            colorWarningTextHover: '#e8b339',
            colorWarningText: '#d89614',
            colorWarningTextActive: '#aa7714'
        },
        colorError: {
            colorErrorBg: '#2c1618',
            colorErrorBgHover: '#451d1f',
            colorErrorBorder: '#5b2526',
            colorErrorBorderHover: '#7e2e2f',
            colorErrorHover: '#e86e6b',
            colorError: '#dc4446',
            colorErrorActive: '#ad393a',
            colorErrorTextHover: '#e86e6b',
            colorErrorText: '#dc4446',
            colorErrorTextActive: '#ad393a'
        },
        colorLink: {
            colorLinkHover: '#15417e',
            colorLinkActive: '#1554ad'
        },
        colorText: {
            colorTextBase: '#ffffff',
            colorText: 'rgba(255, 255, 255, 0.85)',
            colorTextSecondary: 'rgba(255, 255, 255, 0.65)',
            colorTextTertiary: 'rgba(255, 255, 255, 0.45)',
            colorTextQuaternary: 'rgba(255, 255, 255, 0)',
        },
        colorBorder: {
            colorBorder: '#424242',
            colorBorderSecondary: '#303030'
        },
        fill: {
            colorFill: 'rgba(255, 255, 255, 0.18)',
            colorFillSecondary: 'rgba(255, 255, 255, 0.12)',
            colorFillTertiary: 'rgba(255, 255, 255, 0.08)',
            colorFillQuaternary: 'rgba(255, 255, 255, 0)'
        },
        background: {
            colorBgBase: '#000000',
            colorBgContainer: '#141414',
            colorBgElevated: '#1f1f1f',
            colorBgLayout: '#000000',
            colorBgSpotlight: '#424242',
            colorBgMask: 'rgba(0, 0, 0, 0.45)'
        },

        //Shadows
        shadow: {
            defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
            dangerShadow: '0 2px 0 rgba(255, 38, 5, 0.06)',
            primaryShadow: '0 2px 0 rgba(5, 145, 255, 0.1)'
        }
    })
}
