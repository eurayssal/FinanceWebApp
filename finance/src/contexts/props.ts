export interface ICurrentColorPallete {
    colorPrimary: IColorPrimary,
    colorSuccess: IColorSuccess,
    colorWarning: IColorWarning,
    colorError: IColorError,
    colorLink: IColorLink,
    colorText: IColorText
    colorBorder: IColorBorder,
    fill: IFill,
    background: IBackground,
}
interface IColorPrimary {
    colorPrimaryBg: string,
    colorPrimaryBgHover: string,
    colorPrimaryBorder: string,
    colorPrimaryBorderHover: string,
    colorPrimaryHover: string,
    colorPrimary: string,
    colorPrimaryActive: string,
    colorPrimaryTextHover: string,
    colorPrimaryText: string,
    colorPrimaryTextActive: string
}

interface IColorSuccess {
    colorSuccessBg: string,
    colorSuccessBgHover: string,
    colorSuccessBorder: string,
    colorSuccessBorderHover: string,
    colorSuccessHover: string,
    colorSuccess: string,
    colorSuccessActive: string,
    colorSuccessTextHover: string,
    colorSuccessText: string,
    colorSuccessTextActive: string,
}

interface IColorWarning {
    colorWarningBg: string,
    colorWarningBgHover: string,
    colorWarningBorder: string,
    colorWarningBorderHover: string,
    colorWarningHover: string,
    colorWarning: string,
    colorWarningActive: string,
    colorWarningTextHover: string,
    colorWarningText: string,
    colorWarningTextActive: string,
}

interface IColorError {
    colorErrorBg: string,
    colorErrorBgHover: string,
    colorErrorBorder: string,
    colorErrorBorderHover: string,
    colorErrorHover: string,
    colorError: string,
    colorErrorActive: string,
    colorErrorTextHover: string,
    colorErrorText: string,
    colorErrorTextActive: string,
}

interface IColorLink {
    colorLinkHover: string,
    colorLinkActive: string
}

interface IColorText {
    colorText: string,
    colorTextSecondary: string,
    colorTextTertiary: string,
    colorTextQuaternary: string,
}

interface IColorBorder {
    colorBorder: string
    colorBorderSecondary: string
}

interface IFill {
    colorFill: string,
    colorFillSecondary: string,
    colorFillTertiary: string,
    colorFillQuaternary: string,
}

interface IBackground {
    colorBgContainer: string
    colorBgElevated: string
    colorBgLayout: string
    colorBgSpotlight: string
    colorBgMask: string
}