import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useJobtaskStore = defineStore({
    id: 'jobtask',
    state: () => ({
       jobTask : [],
       jobTaskDetail : null,
       jobTaskReporting : null
    }),


    getters: {
        getJobtask: (state) => state.jobTask,
        getJobtaskDetail: (state) => state.jobTaskDetail,
        getJobTaskReporting: (state) => state.jobTaskReporting
    },

    actions: {
        fetchJobTask(){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/jobtask-data`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                // console.log(result.data.data)
                this.jobTask = result.data.data
                console.log(this.jobTask)
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        }
    }
})