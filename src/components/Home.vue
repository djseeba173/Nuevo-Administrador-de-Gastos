<template>
  <div>
      <h4> Su sueldo es: {{sueldo}} </h4>  
      {{ mostrar()}}
  </div>        
</template>

<script>
import { useStore } from '../store/storeGasto.js'
import { useStore } from '../store/storeSueldo.js'
//const traigoSueldo = import { useStore } from '../store/storeSueldo.js';
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    const store2 = useStore2();
    const { sueldo } = storeToRefs(store2);
    const { listaGastos } = storeToRefs(store);
    const { today } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, listaGastos,sueldo //,today
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