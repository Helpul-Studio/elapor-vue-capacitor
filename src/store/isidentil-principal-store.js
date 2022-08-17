import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export default useIsidentilPrincipalStore = defineStore({
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

        fetchIsidentilDetailData(token){
            const authStore = useAuthStore()
            const token = authStore.getToken

        }
    }
})