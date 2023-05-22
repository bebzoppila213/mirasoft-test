import axios from "axios"


export const loadUserData = async (userId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/`)
    return response.data
}