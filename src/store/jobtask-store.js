import axios from "axios";
import { defineStore } from "pinia";
import router from "../router/router";

const baseUrl = 'https://elapor.helpulstudio.com/api';

export const useJobtaskStore = defineStore({
    id: 'jobtask',
    state: () => ({
       jobtask : [] 
    }),


    
})