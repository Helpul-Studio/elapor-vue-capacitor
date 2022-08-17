import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useIsidentilStore = defineStore({
    id: 'isidentil',
    state: () => ({
        isidentilReportingData: [],
        isidentilReporting : null
    }),
    
    getters: {
        getIsidentilReportingData: (state) => state.isidentilReportingData,
        getIsidentilReporting: (state) => state.isidentilReporting
    },

    actions: {

        sendIsidentil(state){
            const authStore = useAuthStore()
            const token = authStore.token

            let formData = new FormData()
            formData.append('location_latitude', state.latitude)
            formData.append('location_longitude', state.longitude)
            formData.append('jobtask_documentation', state.jobtask_documentation)
            formData.append('sector_id', state.sector_id)
            formData.append('report_about', state.report_about)
            formData.append('report_source_information', state.report_source_information)
            formData.append('report_date', state.report_date)
            formData.append('report_place', state.report_place)
            formData.append('report_activities', state.report_activities)
            formData.append('report_analysis', state.report_analysis)
            formData.append('report_prediction', state.report_prediction)
            formData.append('report_steps_taken', state.report_steps_taken)
            formData.append('report_recommendation', state.report_recomendation)
            formData.append('report_teamwise', state.report_teamwise)

            console.log(formData)

            // axios({
            //     method: 'post',
            //     url: `${baseUrl}/report-data`,
            //     data: formData,
            //     headers: {
            //         'Authorization': `Bearer ${token}`,
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }).then(result => {
            //     console.log(result)
            //     router.push('/reporting-history-isidentil')
            // }).catch(err => {
            //     alert(err)
            // })
        },

        getIsidentil(){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/report-data`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.data)
                this.isidentilReportingData = result.data.data
            }).catch(err => {
                console.log(err)
            })
        },

        getDetailIsidentil(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.get(`${baseUrl}/report-detail/${state}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.data[0])
                this.isidentilReporting = result.data.data[0]
                console.log(this.isidentilReporting)
                router.push('/detail-reporting-isidentil')
            }).catch(err => {
                console.log(err)
            })
        },

        editIsidentil(...state){
            const authStore = useAuthStore()
            const token = authStore.getToken

            let formData = new FormData()
            formData.append('location_latitude', state[1].location_latitude)
            formData.append('location_longitude', state[1].location_longitude)
            formData.append('jobtask_documentation', state[1].jobtask_documentation)
            formData.append('sector_id', state[1].sector_id)
            formData.append('report_about', state[1].report_about)
            formData.append('report_source_information', state[1].report_source_information)
            formData.append('report_date', state[1].report_date)
            formData.append('report_place', state[1].report_place)
            formData.append('report_activities', state[1].report_activities)
            formData.append('report_analysis', state[1].report_analysis)
            formData.append('report_prediction', state[1].report_prediction)
            formData.append('report_steps_taken', state[1].report_steps_taken)
            formData.append('report_recommendation', state[1].report_recomendation)
            formData.append('report_teamwise', state[1].report_teamwise)
            
            for (var key of formData.entries()) {
                console.log(key[0] + ', ' + key[1])
            }
            axios({
                method: 'put',
                url: `${baseUrl}/report/update-report/${state[0]}`,
                data: formData,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result.data.message)
                router.push('/reporting-history')
                // this.isidentilReporting = result.data.data[0]
                // console.log(this.isidentilReporting)
                // router.push('/detail-reporting-isidentil')
            }).catch(err => {
                console.log(err)
            })
        },

        deleteIsidentil(state){
            const authStore = useAuthStore()
            const token = authStore.getToken
            axios.delete(`${baseUrl}/report/delete-report/${state}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                alert(result.data.message)
                router.push('/reporting-history-isidentil')
            }).catch(err => {
                console.log(err)
                alert(err)
            })
        }
    }

})