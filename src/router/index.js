import { createRouter, createWebHistory } from "vue-router";

import CreateCurso from '../components/Cursos/Create.vue'
import IndexCursos from '../components/Cursos/Index.vue'
import EditCurso from '../components/Cursos/Edit.vue'

const routes = [
    {
        path: "/Cursos/",
        name: "IndexCursos",
        component: IndexCursos
    },
    {
        path: "/vehiculo-edit/:id",
        name: "EditCurso",
        component: EditCurso,
        props: true
    },
    {
        path: "/curso-create/",
        name: "CreateCurso",
        component: CreateCurso
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})