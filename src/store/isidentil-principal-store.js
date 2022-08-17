import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useIsidentilPrincipalStore = defineStore({
    id: 'isidentil-principal',
    state: () => ({
        isidentilData : [],
        isidentilDataDetail : null
    }),

    getters: {
        getIsidentilData : (state) => state.isidentilData,
        getIsidentilDataDetail : (state) => state.isidentilDataDetail
    },

    actions: {
        fetchIsidentilData(){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/getAllReport`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        },

        fetchIsidentilDetailData(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/report-view/${state}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        }
    }
})