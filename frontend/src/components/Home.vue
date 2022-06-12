<template>
  <div id="app">
    <div class="elSueldo">
      <h2 class="miSueldo"  v-bind:style="color">{{   `Sueldo: ${this.sueldo}`}} </h2>
      <p>{{ mensajeError }}</p>
    </div>
    <br />
    <!-- <div>
      <ul>
        <li :key="prod.key" v-for="prod in this.miLista">
          {{ prod.importe }} - {{ prod.desc }} - {{ prod.categoria }}
          <button @click="borrarGestion(prod.desc, prod.importe)">Anular Gestion</button>
        </li>
      </ul>
    </div> -->
    <div>
      <table>
        <thead>
          <th scope="col" > Importe </th>
          <th scope="col" > Descripcion </th>
          <th scope="col" > Categoria </th>
        </thead>
        <tbody>
          <tr :key="prod.key" v-for="prod in this.miLista">
            <td> {{ prod.importe }} </td>
            <td> {{ prod.desc }} </td>
            <td> {{ prod.categoria }} </td>
            <button type="button" class="btn" style="margin-left: 10px" @click="borrarGestion(prod.desc, prod.importe)">Anular Gestion</button>
          </tr>
        </tbody>
      </table>

      <!-- a button that undos the last gestion -->
      <button type="button" class="btn" style="margin-left: 10px" @click="undoGestion">Undo Gestion</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/storeGasto.js";
import { storeToRefs } from "pinia";
import apiGestionGastos from "../services/apiGestionGastos.js";
import apiGestionSueldo from "../services/apiGestionSueldo.js";

export default {
  setup() {
    const store = useStore();
    const { listaGastos } = storeToRefs(store);
    // const { sueldo } = storeToRefs(store);
    //const { today } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store,
      listaGastos,
       //today
    };
  },
  data() {
    //let hora = this.today.getHours()
    return {
      producto: { importe: 0, desc: "", categoria: "" }, //, tiempo: hora} //le quisimos agregar tiempo pero no funca UwU :3
      color: { color: "green" },
      miLista: [],
      mensajeError: "",
      sueldo: {},
      historial: [],
    };
  },
  created: async function () {
    try {
      const rta = await apiGestionGastos.getGestionGastos();
      // Primero traigo la lista de gastos desde mi api
      this.miLista = rta.data;
      const rta2 = await apiGestionSueldo.getGestionSueldo()
      this.sueldo = rta2.data.sueldo
      // Luego traigo el sueldo de la persona
      for (const gasto of this.miLista) {
        this.sueldo -= gasto.importe
      }

      // Y aca abajo solo cambia el color de la fuente en base a el valor
      if (this.sueldo <= 5000) {
        this.color = { color: "red" };
      }else if(this.sueldo <= 20000){  
        this.color = { color: "orange" };
      }
    } catch (error) {
      console.log(error);
      this.mensajeError = "Se produjo alto error en la conexion brodi";
    }
  },
  methods: {
    agregar() {
      this.store.agregarGasto({ ...this.producto });
    },
    async borrarGestion(descGasto, miValor) {
      try {
        await apiGestionGastos.deleteGestionGastos(descGasto);
        const listaDesc = this.miLista.map((e) => {
          return e.desc;
        });
        const indice = listaDesc.indexOf(descGasto);
        this.sueldo += this.miLista[indice].importe
        this.historial.push(this.miLista[indice])
        this.miLista.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    },
    async agregarGestionGasto(gasto) {
      try{
        const obj = gasto
        this.miLista.push(obj)
        const rta = await apiGestionGastos.setGestionGastos(obj);
        console.log(rta);
    } catch(error){
      console.log(error);
        this.mensajeError = 'Se produjo alto error en la conexion brodi'
    }
    },
    async undoGestion() {
      console.log(this.historial);
      if(this.historial.length > 0){
        const gasto = this.historial.pop()
        await this.agregarGestionGasto(gasto)
        this.sueldo -= gasto.importe
      }
    },
  },
};
</script>

<style>
#app{
  text-align: center;
}

th, td{
  margin: auto; 
  border: 3px solid rgb(  0, 189, 126);
}

.elSueldo{
  margin-bottom: -20px;
}

ul{
  width: 500px;   
  list-style-type: none;
}
button{
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

#miP{
  width: 100px;
}
</style>
