import axios from "axios";
import { defineStore } from "pinia";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: '',
        user : []
    }),

    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user
    },

    actions: {
        login(state){
            axios.post(`${baseUrl}/login`, {
                nrp: state.nrp,
                password : state.password
            }).then(result => {
                console.log(result.data.data.access_token)
                this.token = result.data.data.access_token
                console.log(this.token)
                router.push('/')
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
                this.token = null
                console.log('Berhasil keluar')
                router.push('/login')
            }).catch(err => {
                console.log(err.response.data.message)
            })
        }
    }
})