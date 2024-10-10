export const mask = (mask: string, values: string[]) => {
    const arrayMask = mask.split('');
    let auxNumber = 0;
    let value = '';
    for (const pos of arrayMask) {
        if (values.length === auxNumber) {
            break;
        }
        if (pos === '?') {
            value += values[auxNumber];
            auxNumber++;
        } else {
            value += pos;
        }
    }
    return value;
};

export const hasValue = (value: any | any[]): boolean => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return value !== undefined && value !== '' && value !== null;
};

export const minLength = (value: string, min: number): boolean => {
    if (value) {
        return value.length >= min;
    }
    return false;
};

export const maxLength = (value: string, max: number): boolean => {
    if (value) {
        return value.length <= max;
    }
    return false;
};

export const betweenLength = (value: string, min: number, max: number): boolean => {
    if (value) {
        return value.length >= min && value.length <= max;
    }
    return false;
};

export const removerAcentos = (texto: string) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
