<script>
import { usuarioStore } from './store/usuarioStore';
import { storeToRefs } from 'pinia';

export default{
  setup(){
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store)
    return{
      store, estaLogeado
    }
  }
}
</script>

<template>
  <main>
    
    <div v-if="!estaLogeado">
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
    <h2> AdministradORT </h2>
    <br>
    <div v-if="estaLogeado">
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/agregargasto"> Agregar Gasto</router-link> |
      <router-link to="/agregarsueldo"> Agregar Sueldo </router-link>|
      <router-link to="/logout"> Logout </router-link>
    </p>

    </div>
    <router-view></router-view>
  </main> 
</template>



<style>
@import './assets/base.css';
body{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#app {
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

</style>
