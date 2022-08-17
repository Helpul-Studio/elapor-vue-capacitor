<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
// import Select2 from 'vue3-select2-component';
import { useJobtaskStore } from '../../store/jobtask-store';
import { computed, onMounted } from 'vue';

const jobtaskStore = useJobtaskStore()

const jobtasks = computed(() => jobtaskStore.getJobtask)
const jobtaskAssigned = computed(() => jobtaskStore.getJobtaskAssigned)

onMounted(() => {
    jobtaskStore.fetchJobTask()
})

const createReport = (...state) => {
    jobtaskStore.createReport(...state);
}

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            
            <div class="flex justify-between">
                <p class="my-auto">Total pekerjaan : {{jobtaskAssigned}}</p>
                <router-link to="/reporting-isidentil" class="btn btn-sm">Buat Laporan Isidentil</router-link>
            </div>
            <!-- <input type="text" placeholder="cari pekerjaanmu disini" class="focus:outline-none input bg-gray-300 mb-4 input-sm" /> -->
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md" v-for="(jobtask, index) in jobtasks" :key="jobtask.job_task_id">
                <!-- == 'Ditugaskan' -->
                <div class="card-body" v-if="jobtask.jobtask.job_task_status == 'Ditugaskan'">
                    <h2 class="card-title">{{jobtask.jobtask.job_task_name}}</h2>
                    <p>Tanggal : {{jobtask.jobtask.job_task_date}}</p>
                    <p>Lokasi : {{jobtask.jobtask.job_task_place}}</p>
                    <p>Status : {{jobtask.jobtask.job_task_status}}</p>
                    <div class="card-actions justify-end flex">
                        <button @click="createReport(index, jobtask.jobtask.job_task_id)" class="btn btn-sm">Buat Laporan</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>