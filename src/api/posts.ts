import axios from "axios"
import { IPost } from "../types/Types"

export const loadPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data as IPost[]
}

export const loadPostsByUser = async (userId: number) =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.data as IPost[]
}