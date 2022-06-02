<template>
  <div id="app">
    <div>
      <h2 v-bind:style="color"> {{mostrarSueldo()}} {{checkColor()}}</h2>
      <p> {{mensajeError}} </p>
    </div>
    <br>
    <div> 
      <ul>
        <li :key="obj.key" v-for="obj in listaGastos">
          {{ obj.importe }} - {{ obj.desc }} - {{ obj.categoria }}
        </li>
        <li :key="prod.key" v-for="prod in this.miLista" >
          {{ prod.importe }} - {{ prod.desc }} - {{ prod.categoria }}
          <button @click="borrarGestion(prod.desc)" > Anular Gestion </button>
        </li>
      </ul>
    </div>
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
          producto : {importe:0, desc:'', categoria: ''}, //, tiempo: hora} //le quisimos agregar tiempo pero no funca UwU :3 
          color: {color: 'green'},
          miLista: [],
          mensajeError: '',
      }

  },
  created: async function () {
    try{
          const rta = await apiGestionGastos.getGestionGastos();
          //console.log(rta.data);
          this.miLista = rta.data;
        } catch(error){
          console.log(error);
          this.mensajeError = 'Se produjo alto error en la conexion brodi'
        }
  },
  methods: {
      agregar() {
          this.store.agregarGasto({...this.producto});
      },
      mostrarSueldo(){
          return this.sueldo === undefined ? '0' : `| Sueldo: ${this.sueldo} | `;
      },
      checkColor(){
          if(this.sueldo <= 0){
            this.color = {color: 'red'}; 
          }
      },
      async borrarGestion(descGasto){
          try{
            const rta = await apiGestionGastos.deleteGestionGastos(descGasto)
            const listaDesc = this.miLista.map(e => {return e.desc})
            const indice = listaDesc.indexOf(descGasto)
            this.miLista.splice(indice, 1)
          }catch(error){
            console.log(error)
          }
          
          
      }
  }
}
</script>

<style>

</style>