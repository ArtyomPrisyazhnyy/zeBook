import { $authHost, $host } from "./api";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    const {data} = await $host.post('auth/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}
