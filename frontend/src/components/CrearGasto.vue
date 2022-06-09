<template>
  <div>
      <h2> Agregar Gasto </h2> 
      <div class="container">
        <div>
          <p> Importe <input type="number" v-model="producto.importe" /> </p>
        </div>
        <div>
          <p> Descripcion <input type="text" v-model="producto.desc" /> </p>
        </div>
        <div>
          <p> Categoria <input type="text" v-model="producto.categoria" /> </p>
        </div>
      </div>
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
    buttonStyle:{
      
    }
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
button{
  margin-top: 7px;
  margin-left:3px;
  background-color: rgb(  0, 189, 126); 
  border:none; 
  border-radius: 5px; 
  font-size: 14px;
}

button:hover{
  cursor: pointer;
  background-color: aquamarine;
}

input{
  background-color: rgb(159, 159, 159);
}

.container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.container p, .container input{
  margin: 2px;
}



</style>