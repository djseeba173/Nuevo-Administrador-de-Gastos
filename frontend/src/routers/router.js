import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue"
import CrearGasto from "../components/CrearGasto.vue"
import AgregarSueldo from "../components/AgregarSueldo.vue"
import Usuario from "../components/Usuario.vue"
import NotFound from "../components/NotFound.vue"


const routes = [
    {path: '/', component: Home},
    {path: '/agregargasto', component: CrearGasto},
    {path: '/agregarsueldo', component: AgregarSueldo},
    {path: '/usuario/:id', component: Usuario},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router