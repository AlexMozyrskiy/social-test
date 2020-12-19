import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    }
});

export const usersPageAPI = {
    getUsers(currentPage = 1, usersPerPage = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => {
                return response.data;
            });
    },

    unFollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    followUser(id) {
        return axiosInstance.post(`follow/${id}`, {})
            .then(response => {
                return response.data;
            });
    }
};

export const profilePageAPI = {
    getUserForProfilePage(id) {
        return axiosInstance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    },

    getUserStatus(id) {
        return axiosInstance.get(`profile/status/${id}`)
            .then(response => {
                return response.data;
            });
    },

    updateStatus(status) {
        return axiosInstance.put(`profile/status`, { status: status });
    }
    
};

export const headerAPI = {
    isAuth() {
        return axiosInstance.get("auth/me")
        .then(response => {
            return response.data;
        });
    }
}

export const loginAPI = {
    login(email, password, rememberMe = false, captcha = false) {
        return axiosInstance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
            .then(response => {
                return response.data;
            });
    },

    logout() {
        return axiosInstance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    },

    getCaptcha() {
        return axiosInstance.get("security/get-captcha-url")
            .then(response => {
                return response.data.url;
            });
    }
}