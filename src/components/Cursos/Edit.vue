<script setup>
import { onMounted, ref } from 'vue'
import useCursos from '../../composables/cursos';
import Alert from "./Alert.vue"

const props = defineProps({
    id: {
        type: String,
    },
})

const {getCurso, nombre, fechaInicioCurso, fechaFinCurso, updateCurso, errorsCurso, status} = useCursos()

const formData = new FormData();

onMounted(() => {
    getCurso(props.id)
})

const editCurso = async () =>{
    formData.append('nombre',nombre.value);
    formData.append('fechaInicioCurso',fechaInicioCurso.value);
    formData.append('fechaFinCurso',fechaFinCurso.value);
    for (const [key, value] of formData) {
        formData[key] = value
    }  
    await updateCurso({...formData}, props.id)
}



</script>
<template>
    <div class="space-y-4 w-11/12 mx-auto rounded-md shadow-md bg-white mt-12 p-6">
        <div class="flex justify-between flex-row">

            <header class="mb-3 text-2xl font-bold">Editar vehículo</header>
        </div>
        <form action="" @submit.prevent="editCurso()">
            <div class="grid grid-cols-2 gap-2">
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Nombre" v-model="nombre"  
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="date" placeholder="Fecha de Inicio del curso" v-model="fechaInicioCurso"  
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="date" placeholder="Color" v-model="fechaFinCurso"  
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
            </div>
            <div class="mt-2 flex justify-center">
                <button class="w-20 text-center items-center rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">Edit</button>
            </div>
        </form>
        <alert v-bind:errorsCurso="errorsCurso" v-bind:success="status"></alert>
    </div>
    
</template>
    

<style>

</style>