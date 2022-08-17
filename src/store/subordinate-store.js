import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useSubordinateStore = defineStore({
    id: 'subordinate-store',
    state: () => ({
        subordinate: []
    }),

    getters: {
        getSubordinate: (state) => state.subordinate
    },

    actions: {
        fetchSubordinate(){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/getSubordinate`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.data)
                this.subordinate = result.data.data
            }).catch(err => {
                console.log(err)
                alert(err)
            })
        }
    }
})