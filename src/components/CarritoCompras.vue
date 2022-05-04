<template>
  <h2> Carrito de Compras </h2>
  {{ listaCompras }}
  <button @click="agregar"> agregar compra</button>
  <p>
      Codigo <input type="number" v-model="producto.codigo" />
      Descripcion <input type="text" v-model="producto.desc" />

  </p>
  </template>

<script>
import { useStore } from '../store/storeCarrito.js'
import { storeToRefs } from 'pinia'
export default {
  setup() {
    const store = useStore();
    const { listaCompras } = storeToRefs(store);

    return {
      // you can return the whole store instance to use it in the template
      store, listaCompras
    }
  },
  data(){
      return{
          producto : {codigo:0, desc:''}
      }

  },
  methods: {
      agregar() {
          this.store.agregarCompra({...this.producto});
      }
  }
}
</script>

<style>

</style>