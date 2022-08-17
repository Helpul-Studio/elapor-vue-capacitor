import axios from "axios";
import { defineStore } from "pinia";


const baseUrl = 'https://elapor.helpulstudio.com';

export const useSectorStore = defineStore({
    id: 'sector',
    state: () => ({
        sector: []
    }),

    getters: {
        getSector : (state) => state.sector
    },

    actions: {
        fetchSector(){
            axios.get(`${baseUrl}/getAllSector`, {
            }).then(result => {
                console.log(result.data)
                this.sector = result.data.data
            })
        }
    }
})