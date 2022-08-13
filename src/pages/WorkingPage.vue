<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';
// import Select2 from 'vue3-select2-component';
import { useJobtaskStore } from '../store/jobtask-store';
import { computed, onMounted } from 'vue';

const jobtaskStore = useJobtaskStore()

const jobtasks = computed(() => jobtaskStore.getJobtask)

onMounted(() => {
    jobtaskStore.fetchJobTask()
})

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            
            <div class="flex justify-between">
                <p class="my-auto">Total pekerjaan : 3</p>
                <router-link to="/reporting" class="btn btn-sm">Buat Laporan Isidentil</router-link>
            </div>
            <input type="text" placeholder="cari pekerjaanmu disini" class="focus:outline-none input bg-gray-300 mb-4 input-sm" />
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md" v-for="jobtask in jobtasks" :key="jobtask.job_task_id">
                <div class="card-body">
                    <h2 class="card-title">Mengawal Gubernur</h2>
                    <p>Melakukan Pengawalan gubernur yang akan datang</p>
                    <p>Tanggal : 20-01-2022</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm">Buat Laporan</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>