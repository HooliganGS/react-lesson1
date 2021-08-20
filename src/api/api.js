import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    'API-KEY': 'f4f823ce-76e0-4cdd-917b-eb6c3e1ee620'
});

export const usersAPI ={
   getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data)
    }
}

export const followAPI = {
    getFollow(user,id){
        return instance.delete(`follow/${user.id}`)
            .then(response => response.data)
    }
}
