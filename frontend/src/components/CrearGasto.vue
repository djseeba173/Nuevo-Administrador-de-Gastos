<template>
  <div>
      <h2> Agregar Gasto: </h2> 
      <p>
        Importe <input type="number" v-model="producto.importe" /> |
        Descripcion <input type="text" v-model="producto.desc" /> |
        Categoria <input type="text" v-model="producto.categoria" />
      </p>

      <button @click="agregar"> Agregar </button>
      
  </div>    
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    const { listaGastos } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, listaGastos
    }
  },
  data(){
      return{
          producto : {importe:0, desc:'', categoria: ''}
      }

  },
  methods: {
      agregar() {
        if (this.producto.importe <= 0) {
          alert('No se puede ingresar un importe nulo')
        } else {
          this.store.agregarGasto({...this.producto});
    };
        }
      }
  }
</script>

<style>

</style>