import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useNewsStore = defineStore({
    id: 'news',
    state: () => ({
        news : [],
        newsDetail : ''
    }),

    getters: {
        getNews: (state) => state.news,
        getNewsDetails: (state) => state.newsDetail
    },

    actions: {
        fetchNews(){
            const authStore = useAuthStore()
            const token = authStore.getToken

            axios.get(`https://elapor.helpulstudio.com/getAllNews/`, {
                Authorization: `Bearer ${token}`
            }).then(result => {
                console.log(result.data.data)
                this.news = result.data.data
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        },

        fetchDetailNews(state){
            console.log(state)
            this.newsDetail = this.news[state]
            console.log(this.newsDetail)
            router.push('/news-detail')
        }, 

        
        sendNews(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            console.log(state)

            let formData = new FormData()
            formData.append('sector_id', state.sector_id)
            formData.append('news_title', state.news_title)
            formData.append('news_field', state.news_field)
            formData.append('news_image', state.news_image)
            // console.log(data.values)

            axios({
                method: 'post',
                url: `${baseUrl}/news/add-news`,
                data: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            } 

            ).then(result => {
                console.log(result)
                router.push('/')
            }).catch(err => {
                console.log(err)
                alert(err)
            })
        },
    }
})