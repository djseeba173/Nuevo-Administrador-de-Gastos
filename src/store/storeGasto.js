import {defineStore} from 'pinia';

export const useStore = defineStore('main',{
    state: () =>{
        var today = new Date();
        return {listaGastos: [], today}
    },

    actions: {
        agregarGasto(obj){
            this.listaGastos.push(obj)
        },
        
    }
})