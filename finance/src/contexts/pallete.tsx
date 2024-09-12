interface ITextColors {
    primary: string;
    secondary: string;
}

export interface ICurrentColorPallete {
    backgroundColor: string;
    foregroundColor: string;
    texts: ITextColors;
}

export function GetLightMode(): ICurrentColorPallete {
    return ({
        backgroundColor: '#F1F1F2',
        foregroundColor: '#FFFFFF',
        texts: {
            primary: '#262626',
            secondary: '#ACACAC'
        }
    })
}

export function GetDarkMode(): ICurrentColorPallete {
    return ({
        backgroundColor: '#000000',
        foregroundColor: '#363636',
        texts: {
            primary: '#EEEEEE',
            secondary: '#A7A6A6'
        }
    })
}
