<template>
  <div id="app">
    <div>
      <h2> {{mostrarSueldo()}} </h2> 
    </div>
    <div> 
      <ul>
        <li :key="obj.key" v-for="obj in listaGastos">
          {{ obj.importe }} - {{ obj.desc }} - {{ obj.categoria }}
        </li>
      </ul>
    </div>
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
    //const { today } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, listaGastos, sueldo, //today
    }
  },
  data(){
      //let hora = this.today.getHours()
      return{
          producto : {importe:0, desc:'', categoria: ''}//, tiempo: hora} //le quisimos agregar tiempo pero no funca UwU :3
      }

  },
  methods: {
      agregar() {
          this.store.agregarGasto({...this.producto});
      },
      mostrar(){
          let array = [];
          array.push(this.listaGastos.map(obj => `| Importe: ${obj.importe} | Descripcion: ${obj.desc} | Categoria: ${obj.categoria} |`)) //| Tiempo: ${obj.tiempo}`);

      },
      mostrarSueldo(){
          return this.sueldo.sueldo === undefined ? '0' : `| Sueldo: ${this.sueldo.sueldo} | `;
      },
  }
}
</script>

<style>

</style>