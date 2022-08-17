<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
// import Select2 from 'vue3-select2-component';
import { useIsidentilStore } from '../../store/isidentil-store';
import { computed, onMounted } from 'vue';

const isidentilStore = useIsidentilStore()

const isidentils = computed(() => isidentilStore.getIsidentilReportingData)

onMounted(() => {
    isidentilStore.getIsidentil()
})

const detailIsidentil = (state) => {
    isidentilStore.getDetailIsidentil(state)
}

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            
            <div class="flex justify-between">
                <p class="my-auto">Total pekerjaan : {{isidentils.length}}</p>
            </div>
            <!-- <input type="text" placeholder="cari pekerjaanmu disini" class="focus:outline-none input bg-gray-300 mb-4 input-sm" /> -->
            <div v-for="isidentil in isidentils" :key="isidentil">
                <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title">{{isidentil.report_about.substring(0,40)+".."}}</h2>
                    <p>Tanggal : {{isidentil.report_date}}</p>
                    <p>Lokasi : {{isidentil.report_place}}</p>
                    <div class="card-actions justify-end flex">
                        <button @click="detailIsidentil(isidentil.report_task_id)" class="btn btn-sm border-2">Lihat Detail Laporan</button>
                    </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>