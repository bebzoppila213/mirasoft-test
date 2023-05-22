import axios from "axios"


export const loadComments = async (postId: number) => {
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return comments.data
}