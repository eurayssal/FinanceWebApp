import axios from "axios";

const hookApi = () => {
    const myAxios = axios.create({
        baseURL: 'https://localhost:7257',
    });

    // Intercepta requisições para adicionar o token, se houver
    myAxios.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return myAxios;
};

export default hookApi;