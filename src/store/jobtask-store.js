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
       jobTaskAssigned : null
    }),


    getters: {
        getJobtask: (state) => state.jobTask,
        getJobtaskAssigned: (state) => state.jobTaskAssigned,
        getJobtaskDetail: (state) => state.jobTaskDetail,
        getJobTaskId: (state) => state.jobTaskId,
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
                console.log(result.data.data)
                this.jobTask = result.data.data
                this.jobTaskAssigned = this.jobTask.filter(job => job.jobtask.job_task_status === 'Ditugaskan').length
                // console.log(this.jobTask)
            }).catch(err => {
                alert(err.response.data.meta.message)
            })
        },

        createReport(...state){
            this.jobTaskId = state[1]
            console.log(state)
            console.log(this.jobTaskId)
            router.push('/reporting')
        },

        sendReport(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            // console.log(state.latitude)
            console.log(state.jobtask_documentation)

            let formData = new FormData()
            formData.append('location_latitude', state.latitude)
            formData.append('location_longitude', state.longitude)
            formData.append('jobtask_documentation', state.jobtask_documentation)
            formData.append('report_about', state.report_about)
            formData.append('report_source_information', state.report_source_information)
            formData.append('report_date', state.report_date)
            formData.append('report_place', state.report_place)
            formData.append('report_activities', state.report_activities)
            formData.append('report_analysis', state.report_analysis)
            formData.append('report_prediction', state.report_prediction)
            formData.append('report_steps_taken', state.report_steps_taken)
            formData.append('report_recommendation', state.report_recomendation)
            // console.log(data.values)

            axios({
                method: 'post',
                url: `${baseUrl}/jobtask-result/${this.jobTaskId}`,
                data: formData,
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
                alert(result)
            }).catch(err => {
                console.log(err)
                alert(err)
            })
        },

        getReport(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/jobtask-result/${state}`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.data[0].jobtask_result[0])
                this.jobTaskDetail = result.data.data[0].jobtask_result[0]
                router.push('/detail-reporting')
            }).catch(err => {
                console.log(err)
            })
        }
    }
})