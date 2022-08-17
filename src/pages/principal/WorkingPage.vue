<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
// import Select2 from 'vue3-select2-component';
import { useJobtaskPrincipalStore } from '../../store/jobtask-principal-store';
import { computed, onMounted } from 'vue';

const jobtaskPrincipalStore = useJobtaskPrincipalStore()

const jobtaskPrincipals = computed(() => jobtaskPrincipalStore.getJobtaskPrincipal)

onMounted(() => {
    jobtaskPrincipalStore.fetchAllJobtaskPrincipal()
})

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            
            <div class="flex justify-between">
                <p class="my-auto">Total pekerjaan : {{jobtaskPrincipals.length}}</p>
                <router-link to="/add-jobtask" class="btn btn-sm">Buat Tugas</router-link>
            </div>
            <!-- <input type="text" placeholder="cari pekerjaanmu disini" class="focus:outline-none input bg-gray-300 mb-4 input-sm" /> -->
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md" v-for="(jobtaskPrincipal) in jobtaskPrincipals" :key="jobtaskPrincipal.job_task_id">
                <!-- == 'Ditugaskan' -->
                <div class="card-body">
                    <h2 class="card-title">{{jobtaskPrincipal.job_task_name}}</h2>
                    <p>Tanggal : {{jobtaskPrincipal.job_task_date}}</p>
                    <p>Lokasi : {{jobtaskPrincipal.job_task_place}}</p>
                    <p>Status : {{jobtaskPrincipal.job_task_status}}</p>
                    <div class="card-actions justify-end flex">
                        <button class="btn btn-sm" @click="jobtaskPrincipalStore.fetchJobtaskPrincipalDetail(jobtaskPrincipal.job_task_id)">Lihat Detail Tugas</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>