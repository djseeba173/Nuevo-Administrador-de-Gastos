<template>
  <div>
      <h2> Ingrese su sueldo: </h2> 
      <input type="number" v-model="this.sueldo" />
      <button @click="meter" > Agregar </button>
  </div>   
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import apiGestionSueldo from '../services/apiGestionSueldo.js';
export default {
  setup() {
    const store = useStore();

    return {
      // you can return the whole store instance to use it in the template
      store
    }
  },
  data(){
      return{
          sueldo : 0
      }

  },
  methods: {
      async meter(){
        try{
          const obj = {sueldo: this.sueldo}
          const rta = await apiGestionSueldo.setGestionSueldo(obj)
        }catch (e){
          console.log(e)
        }
      }
  }
}
</script>

<style>

</style>