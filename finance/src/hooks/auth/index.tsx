import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/site/entrar');
            return;
        }

        try {
            // Decodificar a parte da carga do JWT
            const payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload)); // Decodifica a parte payload

            const currentTime = Date.now() / 1000; // Tempo atual em segundos

            if (decodedPayload.exp < currentTime) {
                // Se o token expirou, redirecione para o login
                navigate('/site/entrar');
            }
        } catch (error) {
            // Caso haja um erro na decodificação do token, redirecione para o login
            console.error("Token inválido", error);
            navigate('/site/entrar');
        }
    }, [navigate]);
};

export default useAuth;
