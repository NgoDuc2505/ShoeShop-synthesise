import axios from "axios";
//utils
import { getLocal } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN, BASE_URL } from '/src/const/index.js';

export const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
});

axiosWithAuth.interceptors.request.use(
    (config)=>{
        config.headers={
            Authorization: `Bearer ${getLocal(ACCESS_TOKEN)}`
        };
        config.method = 'post';

        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)