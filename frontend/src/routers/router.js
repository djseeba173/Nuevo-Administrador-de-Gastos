import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue"
import CrearGasto from "../components/CrearGasto.vue"
import AgregarSueldo from "../components/AgregarSueldo.vue"
import Usuario from "../components/Usuario.vue"
import NotFound from "../components/NotFound.vue"
import Login from "../components/Login.vue"
import Logout from "../components/Logout.vue"

const routes = [
    //privs
    {path: '/', component: Home, meta: {requiresAuth: true}},
    {path: '/agregargasto', component: CrearGasto,  meta: {requiresAuth: true}},
    {path: '/agregarsueldo', component: AgregarSueldo,  meta: {requiresAuth: true}},
    {path: '/usuario/:id', component: Usuario,  meta: {requiresAuth: true}},
    {path: '/logout', component: Logout, meta: {requiresAuth: true}},
    //public

    {path: '/login', component: Login},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},

]   

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {

    const login = localStorage.getItem('usuario')
    if(to.matched.some(record => record.meta.requiresAuth) && !login){
        next('/')
    }else{
        next()
    }

})



export default router