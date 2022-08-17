<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
// import Select2 from 'vue3-select2-component';
import {useIsidentilPrincipalStore} from '../../store/isidentil-principal-store'
import { computed, onMounted } from 'vue';

const isidentilPrincipalStore = useIsidentilPrincipalStore()

const isidentilPrincipals = computed(() => isidentilPrincipalStore.getIsidentilData)

onMounted(() => {
    isidentilPrincipalStore.fetchIsidentilData()
})

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            
            <div class="flex justify-between">
                <p class="my-auto">Total pekerjaan : {{isidentilPrincipals.length}}</p>
            </div>
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md" v-for="isidentilPrincipal in isidentilPrincipals" :key="isidentilPrincipal">
                <div class="card-body">
                    <h2 class="card-title">{{isidentilPrincipal.report_about.substring(0,40)+".."}}</h2>
                    <p>Tanggal : {{isidentilPrincipal.report_date}}</p>
                    <p>Lokasi : {{isidentilPrincipal.report_place}}</p>
                    <p>Informasi : {{isidentilPrincipal.report_source_information}}</p>
                    <div class="card-actions justify-end flex">
                        <button class="btn btn-sm" @click="isidentilPrincipalStore.fetchIsidentilDetailData(isidentilPrincipal.job_task_result_id)">Lihat Detail Kasus</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>