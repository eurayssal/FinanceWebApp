import { createContext, useContext } from "react";

export type StatusType = 'success' | 'info' | 'warning' | 'alert' | 'error';
export type FormType = 'create' | 'edit' | 'custom' | 'delete' | 'details' | 'login';

export interface INotification {
    status: StatusType;
    message: string;
}

export interface IErrorHelper {
    message: string;
}

export class HelperModel {
    constructor(status: StatusType, notifications?: INotification[]) {
        this.status = status;
        this.notifications = notifications || [];
    }

    public status: StatusType;
    public notifications: INotification[];

    get isValid() { return this.status !== 'error'; }

    setError(message: string) {
        this.status = 'error';
        if (!this.notifications) {
            this.notifications = [];
        }
        this.notifications.push({ status: 'error', message: message });
    }
}

interface IFormContext {
    onSubmitAsync: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const FormContext = createContext<IFormContext | undefined>(undefined);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error('useForm deve ser usado dentro de FormProvider')
    return context;
}