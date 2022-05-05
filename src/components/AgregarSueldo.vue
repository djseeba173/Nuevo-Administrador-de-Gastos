<template>
  <div>
      <h2> Aca agregas tu sueldovich </h2> 
      <input type="number" v-model="salario.sueldo" />
      <button @click="agregar" > Agregar </button>
  </div>   
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    const { sueldo } = storeToRefs(store);

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
      agregar() {
          this.store.agregarSueldo({...this.salario});
          alert("Se agregó de manera correcta")
      },
      mostrar(){
          return "Sueldo: " + this.sueldo;
      }
  }
}
</script>

<style>

</style>