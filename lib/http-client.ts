import axios from 'axios'

export const httpClient = axios.create({
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json"
    }
})

httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
        const message = err.response?.data?.error ?? 'Error inesperado';
        return Promise.reject(new Error(message))
    }
)