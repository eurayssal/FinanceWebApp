import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import hookApi from '../hooks/api';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
    const api = hookApi();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setIsValidToken(false);
                return;
            }

            try {
                const response = await api.post('/api/usuario/validate-token', { token });
                if (response.status === 200) {
                    setIsValidToken(true);
                } else {
                    setIsValidToken(false);
                }
            } catch (error) {
                setIsValidToken(false);
            }
        };

        validateToken();
    }, [api]);

    if (isValidToken === null) {
        return <div>Loading...</div>; // Mostra um carregamento enquanto valida o token
    }

    if (isValidToken === false) {
        return <Navigate to="/entrar" />;
    }

    return children;
};

export default ProtectedRoute;
