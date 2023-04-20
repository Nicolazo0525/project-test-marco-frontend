<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    errorsCurso: {
        type: Object,
    },
    success: {
        type: Object,
    },
})
const errorsCurso = ref(props.errorsCurso)
const success = ref(props.success)



watch(() => props.success, (newValSuccess) => {
    success.value = newValSuccess
})
watch(() => props.errorsCurso,(newValErrors) => {
    errorsCurso.value = newValErrors
})

function closeAlert(){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    element.parentNode.parentNode.removeChild(element.parentNode);
}
</script>

<template>
    <!-- Success -->
    <template v-if="success.length > 0">
        <div class='absolute right-3 bottom-[2em] items-center flex flex-row bg-gray-900 h-10 w-[400px] rounded-full shadow-[0_0_20px_#00C85177]'>
            <span class='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>
                {{ success }}
            </span>
            <button @click="closeAlert()" class="w-[10%] h-full items-center bg-green-400 rounded-r-2xl text-green-600 text-center flex justify-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>            
        </div>
    </template>
    <!-- Errors -->
    <template v-if="errorsCurso">
        <div class="flex flex-col gap-4">
            <template v-if="errorsCurso.nombre">
                <div class='absolute right-3 bottom-[5em] items-center flex flex-row bg-gray-900 h-10 w-[400px] shadow-[0_0_20px_#ff444477] rounded-full'>
                    <span class='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>
                        {{ errorsCurso.nombre[0] }}
                    </span>
                    <button @click="closeAlert()" class="w-[10%] h-full items-center bg-red-400 rounded-r-2xl text-red-600 text-center flex justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>            
                </div>
            </template>
            <template v-if="errorsCurso.fecha_inicio_curso">
                <div class='absolute right-3 bottom-[8em] items-center flex flex-row bg-gray-900 h-10 w-[400px] shadow-[0_0_20px_#ff444477] rounded-full'>
                    <span class='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>
                        {{ errorsCurso.fecha_inicio_curso[0] }}
                    </span>
                    <button @click="closeAlert()" class="w-[10%] h-full items-center bg-red-400 rounded-r-2xl text-red-600 text-center flex justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>            
                </div>
            </template>
            <template v-if="errorsCurso.fecha_fin_curso">
                <div class='absolute right-3 bottom-[11em] items-center flex flex-row bg-gray-900 h-10 w-[400px] shadow-[0_0_20px_#ff444477] rounded-full'>
                    <span class='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>
                        {{ errorsCurso.fecha_fin_curso[0] }}
                    </span>
                    <button @click="closeAlert()" class="w-[10%] h-full items-center bg-red-400 rounded-r-2xl text-red-600 text-center flex justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>            
                </div>
            </template>
        </div>
    </template>
</template>
