import axios from "axios";

const hookApi = () => {
    const myAxios = axios.create({ baseURL: 'https://localhost:7257' });
    return myAxios;
};

export default hookApi;