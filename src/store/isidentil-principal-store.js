import axios from "axios";
import { defineStore } from "pinia";
import router from "../router/router";
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
                this.isidentilData = result.data.data
                console.log(this.isidentilData)
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
                console.log(result.data.data)
                this.isidentilDataDetail = result.data.data
                router.push('/detail-isidentil-principal')
            }).catch(err => {
                console.log(err)
            })
        },


        addInstruction(...state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.put(`${baseUrl}/report-update/${state[0]}`, {
                report_note: state[1].report_note
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
                router.push('/working-isidentil-principal')
            }).catch(err => {
                console.log(err)
            })
        }
    }
})