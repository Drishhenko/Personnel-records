import { $host } from '.'
import jwt_decode from "jwt-decode"

export const signIn = async (login, password) => {
    const {data} = await $host.post('api/auth', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}