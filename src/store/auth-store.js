import axios from "axios";
import { defineStore } from "pinia";
import router from "../router/router";
import { inject } from "vue";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem('token'),
        user : '',
        role : ''
    }),

    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user,
        getRole: (state) => state.role
    },

    actions: {
        login(state){
            axios.post(`${baseUrl}/login`, {
                nrp: state.nrp,
                password : state.password
            }).then(result => {
                console.log(result.data.data.access_token)
                localStorage.setItem('token', result.data.data.access_token)
                this.token = localStorage.getItem('token')
                this.role = result.data.data.user_role
                if(this.role == 'subordinate') {
                    router.push('/')
                } else {
                    router.push('/principal')
                }
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        },

        logout(){
            axios({
                method: 'post',
                url: `${baseUrl}/logout`,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(res => {
                localStorage.removeItem('token')
                console.log('Berhasil keluar')
                router.push('/login')
            }).catch(err => {
                console.log(err.response.data.message)
            })
        },

        fetchUser(){
            axios.get(`${baseUrl}/profile`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(result => {
                console.log(result.data.data.data_user)
                this.user = result.data.data.data_user
            }).catch(err => {
                console.log(err)
            })
        }
    }
})