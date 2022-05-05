<template>
  <div>
      <h2> {{this.sueldo}} </h2>
      {{ mostrar()}}
  </div>        
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    const { listaGastos } = storeToRefs(store);
    const { sueldo } = storeToRefs(store);
    const { today } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, listaGastos, sueldo //,today
    }
  },
  data(){
      return{
          producto : {importe:0, desc:'', categoria: ''}  //, tiempo: this.today.getHours()} le quisimos agregar tiempo pero no funca UwU :3
      }

  },
  methods: {
      agregar() {
          this.store.agregarGasto({...this.producto});
      },
      mostrar(){
          return this.listaGastos.map(obj => `Importe: ${obj.importe} | Descripcion: ${obj.desc} | Categoria: ${obj.categoria} | Tiempo: ${obj.tiempo}`);
      }
  }
}
</script>

<style>

</style>