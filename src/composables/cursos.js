import axios from "axios";
import { ref } from "vue";
import { useRoute } from 'vue-router';
import localAxios from "../localAxios";

export default function useCursos(){

    const nombre = ref([])
    const fechaInicioCurso = ref([])
    const fechaFinCurso = ref([])
    const cursos = ref([])
    const curso = ref([])
    const metaCursos = ref([])
    const status = ref([])

    const errorsCurso = ref('')

    
    const getCursos = async (page) =>{
        let response = await localAxios.get('/api/cursos?page='+page)
        cursos.value = response.data
        metaCursos.value = response.data.meta
    }

    const getCurso = async (id) =>{
        let response = await localAxios.get('/api/cursos/'+id)
        nombre.value = response.data.data.nombre
        fechaInicioCurso.value = response.data.data.fecha_inicio_curso
        fechaFinCurso.value = response.data.data.fecha_fin_curso
    }

    const storeCurso = async (formData) =>{
        
        try {
            let csrfCookie = await localAxios.get('/sanctum/csrf-cookie');
            let response = await localAxios.post('/api/cursos/', formData, csrfCookie)
            status.value = response.data.status
        } catch (error) {
            if (error.response.status === 422) {
                errorsCurso.value = error.response.data.errors
            }
        }
        
    }

    const updateCurso = async (formData, id) =>{
        try {
            let csrfCookie = await localAxios.get('/sanctum/csrf-cookie');
            let response = await localAxios.put('api/cursos/' + id, formData, csrfCookie)
            status.value = response.data.status
        } catch (error) {
            if (error.response.status === 422) {
                errorsCurso.value = error.response.data.errors
            }
        }
        
    }

    const deleteCurso = async(id) =>{
        try {
            let response = await localAxios.delete('/api/cursos/' + id)
            status.value = response.data.status
        } catch (error) {
            if (error.response.status === 422) {
                errorsCurso.value = error.response.data.errors
            }
        }
    }
    
    return{
        nombre,
        fechaInicioCurso,
        fechaFinCurso,
        cursos,
        curso,
        metaCursos,
        status,
        errorsCurso,
        getCursos,
        getCurso,
        storeCurso,
        updateCurso,
        deleteCurso
    }
}
