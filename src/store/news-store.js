import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useNewsStore = defineStore({
    id: 'news',
    state: () => ({
        news : []
    }),

    getters: {
        getNews: (state) => state.news
    },

    actions: {
        fetchNews(){
            const authStore = useAuthStore()
            const token = authStore.getToken

            axios.get(`https://elapor.helpulstudio.com/getAllNews/`, {
                Authorization: `Bearer ${token}`
            }).then(result => {
                console.log(result.data.data)
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        }
    }
})