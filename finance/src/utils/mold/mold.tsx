export const hasValue = (value: any | any[]): boolean => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return value !== undefined && value !== '' && value !== null;
};