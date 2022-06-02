import {defineStore} from 'pinia';

export const useStore = defineStore('main',{
    state: () =>{
        return {listaGastos: [], sueldo: 0}
    },

    actions: {
        agregarGasto(obj){
            this.listaGastos.push(obj)
        },
        
    }
})