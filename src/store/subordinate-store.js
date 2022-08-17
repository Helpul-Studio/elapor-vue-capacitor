import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useSubordinateStore = defineStore({
    id: 'subordinate-store',
    state: () => ({
        subordinate: [
            { value: '1', label: 'Batman' },
            { value: '2', label: 'Robin' },
            { value: 'joker', label: 'Joker' }
        ]
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
                let data = result.data.data
                const constSubordinate = data.map(item => {
                    const container = {}

                    container.value = item.user_id
                    container.label = item.name

                    return container
                })
                this.subordinate = constSubordinate
            }).catch(err => {
                console.log(err)
                alert(err)
            })
        }
    }
})