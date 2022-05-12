<template>
  <div>
      <h2> Agregar Gasto: </h2> 
      <p>
        Importe <input type="number" v-model="producto.importe" /> |
        Descripcion <input type="text" v-model="producto.desc" /> |
        Categoria <input type="text" v-model="producto.categoria" />
      </p>

      <button @click="agregarGestionGasto"> Agregar </button>
      
  </div>    
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
import apiGestionGastos from '../services/apiGestionGastos.js'
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
          producto : {importe:0, desc:'', categoria: ''},
          miLista: [],
      }

  },
  methods: {
      agregar() {
          if (this.producto.importe <= 0) {
            alert('No se puede ingresar un importe nulo')
          } else {
            this.store.agregarGasto({...this.producto});
          };
        },
        async agregarGestionGasto(){
          try{
            const obj = {...this.producto}
            this.miLista.push(obj)
            const rta = await apiGestionGastos.setGestionGastos(obj);
            console.log(rta);
        } catch(error){
            console.log(error);
            this.mensajeError = 'Se produjo alto error en la conexion brodi'
        }

        }
      }
  }
</script>

<style>

</style>