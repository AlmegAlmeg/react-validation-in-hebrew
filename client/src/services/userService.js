import axios from "axios"
import jwtDecode from 'jwt-decode'

const URL = process.env.REACT_APP_SERVER_URL

export const register = user => axios.post(`${URL}/users/register`, user)

export const login = async user => {
    const { data:{ token } } = await axios.post(`${URL}/users/login`, user)
    localStorage.setItem('userToken', token)
}

export const getCurrentUser =  () => {
    try {
        const token = localStorage.getItem('userToken')
        return jwtDecode(token)
    } catch (err) {
        return null
    }
}

export const logout = () => {
    localStorage.removeItem("userToken");
    return (window.location = "/");
};