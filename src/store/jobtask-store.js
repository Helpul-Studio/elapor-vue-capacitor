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
       jobTaskId : null,
       jobTaskReporting : null
    }),


    getters: {
        getJobtask: (state) => state.jobTask,
        getJobtaskDetail: (state) => state.jobTaskDetail,
        getJobTaskId: (state) => state.jobTaskId,
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
                // this.jobTask = this.jobTask.filter(job => job.jobtask.job_task_status === 'Ditugaskan')
                // console.log(this.jobTask)
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        },

        createReport(state){
            this.jobTaskId = state
            console.log(this.jobTaskId)
            router.push('/reporting')
        },

        sendReport(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            console.log(state.latitude)
            console.log(state.image)

            let data = new FormData()
            data.append('latitude', state.latitude)
            data.append('longitude', state.longitude)
            data.append('jobtask_documentation', state.image)
            console.log(data.values)

            axios({
                method: 'post',
                url: `${baseUrl}/jobtask-result/3`,
                data: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            } 
                // {
                //     location_latitude: state.latitude,
                //     location_longitude: state.longitude,
                //     jobtask_documentation: state.image[0]
                // },
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // }
            ).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        }
    }
})