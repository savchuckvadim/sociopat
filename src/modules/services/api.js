import axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)

export const getProfile = (userId) => 
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
