<template>
  <div>
      <h2> Ingrese su sueldo: </h2> 
      <input type="number" v-model="salario.sueldo" />
      <button @click="meter" > Agregar </button>
  </div>   
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
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
          salario : {sueldo: 0}
      }

  },
  methods: {
      async mostrar(){
          return "Sueldo: " + await apiGestionSueldo.getGestionSueldo();
      },
      async meter(){
        try{
          const obj = {...this.salario}
          const rta = await apiGestionSueldo.setGestionSueldo(obj)
          console.log("AQUI: " + rta)
        }catch (e){
          console.log(e)
        }
      }
  }
}
</script>

<style>

</style>