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
        getIsidentilReportingData: (state) => state.isidentilReportingData
    },

    actions: {

        sendIsidentil(state){
            const authStore = useAuthStore()
            const token = authStore.token

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

            axios({
                method: 'post',
                url: `${baseUrl}/api/report-data`,
                data: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        }
    }

})