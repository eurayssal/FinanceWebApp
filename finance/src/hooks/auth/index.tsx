import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosInstance } from 'axios';
import { useNavigate } from 'react-router-dom';
import hookApi from '../api';

// Definindo os tipos para o contexto
interface IApiContextProps {
    axiosInstance: AxiosInstance;
    Authenticated: boolean;
    setIsAuthenticated: (auth: boolean) => void;
}

export const ApiContext = createContext<IApiContextProps>({} as any);

interface IProviderProps {
    children: ReactNode;
}

export const Provider: React.FC<IProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const apiRequest = hookApi();

    // Criando a instância do Axios com interceptadores
    const axiosInstance = axios.create({
        baseURL: 'https://localhost:7257',
    });

    axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/site/entrar');
            setIsAuthenticated(false);
            return;
        }

        try {
            const payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload));

            const currentTime = Date.now() / 1000;

            if (decodedPayload.exp < currentTime) {
                localStorage.removeItem('token');
                navigate('/site/entrar');
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Token inválido", error);
            navigate('/site/entrar');
            setIsAuthenticated(false);
        }
    }, [apiRequest]);

    return (
        <ApiContext.Provider value={{ axiosInstance, Authenticated: isAuthenticated, setIsAuthenticated }}>
            {children}
        </ApiContext.Provider>
    );
};
