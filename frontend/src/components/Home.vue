<template>
  <div id="app">
    <div>
      <h2 v-bind:style="color">{{this.sueldo}} </h2>
      <p>{{ mensajeError }}</p>
    </div>
    <br />
    <div>
      <ul>
        <li :key="prod.key" v-for="prod in this.miLista">
          {{ prod.importe }} - {{ prod.desc }} - {{ prod.categoria }}
          <button @click="borrarGestion(prod.desc)">Anular Gestion</button>
        </li>
      </ul>
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
    };
  },
  created: async function () {
    try {
      const rta = await apiGestionGastos.getGestionGastos();
      // console.log(rta.data);
      this.miLista = rta.data;
      const rta2 = await apiGestionSueldo.getGestionSueldo()
      this.sueldo = rta2.data.sueldo
      // console.log("ACA DEBERIA ESTAR " + (rta2.data))
      if (this.sueldo <= 0) {
        this.color = { color: "red" };
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
    async borrarGestion(descGasto) {
      try {
        await apiGestionGastos.deleteGestionGastos(descGasto);
        const listaDesc = this.miLista.map((e) => {
          return e.desc;
        });
        const indice = listaDesc.indexOf(descGasto);
        this.miLista.splice(indice, 1);
      } catch (error) {
        console.log(error);
      }
    },

  },
};
</script>

<style></style>
