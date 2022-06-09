<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      Email: <input type="text" v-model="usuario.email"/> 
      Password: <input type="password" v-model="usuario.password"  />
      <button type="sumbit">Ingresar</button>
      {{ msgError.msg}}
    </form>
  </div>
</template>

<script>

import { usuarioStore } from '../store/usuarioStore';
import { storeToRefs } from 'pinia';

export default {
    setup(){
        const store = usuarioStore();
        const {registerUser} = store;
        const {estaLogeado} = storeToRefs(store)

        return{
            store, registerUser, estaLogeado
        }
    },

    data(){
        return {
            usuario: {email: '', password: ''},
            msgError: {msg: ' '}
        }
    },

    methods:{
        async login(){
            try{
                await this.registerUser({...this.usuario})
                if(this.estaLogeado){
                    this.$router.push('/')
                }else{
                    this.msgError.msg = 'Usuario o Contraseña incorrecto/os'
                }
            }catch(e){
                this.msgError.msg = 'Algo anda mal'
            }

        }
    }




};
</script>

<style></style>
