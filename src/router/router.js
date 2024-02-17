import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/consultar',
        component: () => import('../page/EstudianteConsultar.vue')
    },
    {
        path:'/actualizar',
        component: () => import('../page/EstudianteActualizar.vue')
    },
    {
        path:'/guardar',
        component: () => import('../page/EstudianteGuardar')
    },
    {
        path:'/eliminar',
        component: () => import('../page/EstudianteEliminar.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../page/NoFoundPage.vue')
    }
    
]

const router = createRouter({history: createWebHashHistory(),routes})

export default router