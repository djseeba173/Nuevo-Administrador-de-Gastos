<template>
  <div>
      <h2> Ingrese su sueldo: </h2> 
      <input type="number" v-model="salario.sueldo" />
      <button> Agregar </button>
  </div>   
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    // const { agregarSueldoStore } = store;
    const sueldo = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, sueldo
    }
  },
  data(){
      return{
          salario : {sueldo: 0}
      }

  },
  methods: {
      mostrar(){
          return "Sueldo: " + this.sueldo;
      }
  }
}
</script>

<style>

</style>