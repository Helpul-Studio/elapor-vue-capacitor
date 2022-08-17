import axios from "axios";
import { defineStore } from "pinia";
import router from "../router/router";
import { useAuthStore } from "./auth-store";


const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useJobtaskPrincipalStore = defineStore({
    id: 'jobtask-principal',
    state: () => ({
        jobTaskPrincipal : [],
        jobTaskPrincipalDetail : null
    }),

    getters : {
        getJobtaskPrincipal : (state) => state.jobTaskPrincipal,
        getJobtaskPrincipalDetail : (state) => state.jobTaskPrincipalDetail
    },

    actions: {
        fetchAllJobtaskPrincipal(){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/getAllJobtask`, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.data)
                this.jobTaskPrincipal = result.data.data
            }).catch(err => {
                console.log(err)
            })
        },

        fetchJobtaskPrincipalDetail(state){
            console.log(state)
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/jobtask/get-jobtask/${state}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data)
                this.jobTaskPrincipalDetail = result.data
                router.push('/detail-reporting-principal')
            }).catch(err => {
                console.log(err)
            })
        },
        
        deleteJobtaskPrincipal(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.delete(`${baseUrl}/jobtask/delete-jobtask/6`, {

            })
        },

        addJobtask(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.post(`${baseUrl}/jobtask/add-jobtask`, {
                sector_id : state.sector_id,
                job_task_name : state.job_task_name,
                job_task_place : state.job_task_place,
                job_task_date : state.job_task_date,
                subordinate: state.subordinate
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
                router.push('/working-principal')
            }).catch(err => {
                console.log(err)
            })
        }
    }    
})