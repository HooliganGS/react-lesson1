import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '29d7da1b-eef0-42e1-8995-b396ade9f1e0'}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
             return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get('profile/status/'+userId);
    },
    updateStatus(status){
        return instance.put('profile/status',{status:status});
    }
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe){
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}