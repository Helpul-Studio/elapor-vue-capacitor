<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
import { useAuthStore } from '../../store/auth-store';
import { reactive, ref } from '@vue/reactivity';

const authStore = useAuthStore()

const profile = computed(() => authStore.getUser)

const baseUrl = `https://elapor.helpulstudio.com/storage/`



onMounted(() => {
    authStore.fetchUser()
})

let images = ref('')


const updateUser = reactive({
    name : '',
    email : '',
    user_photo: images,
});

const handleFileUpload = async(e) => {
    console.log(e.target.files[0])
    updateUser.user_photo = e.target.files[0]
    // file = e.target.files[0]
    images.value = e.target.files[0]
    console.log(images.value)
}


const update = () => {
    console.log('run')
    authStore.updateProfile(updateUser)
}

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            <div class="mx-auto">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img :src="`${baseUrl}${profile.data_user.user_photo}`" />
                    </div>
                </div>
            </div>
            <div id="profile-section" class="mt-5 gap-y-5 grid">
            <form @submit.prevent="update" class="p-2">
                <div>
                    <h4 class="text-md font-semibold text-gray-600">Email : {{profile.data_user.email}}</h4>
                    <input type="text" placeholder=""  class="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 p-2" v-model="updateUser.email" required/>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-600">Nama : {{profile.data_user.name}}</h4>
                    <input type="text" placeholder=""  class="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 p-2" v-model="updateUser.name" required/>
                </div>
            <div>
                <label class="block mb-2 bg-slate text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Photo</label>
                <input class="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 p-2" id="file_input" type="file" ref="file" @change="handleFileUpload" >
            </div>

            

                <div>
                    <button type="submit" class="btn w-full mt-4">Simpan Profil</button>
                </div>
            </form>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>