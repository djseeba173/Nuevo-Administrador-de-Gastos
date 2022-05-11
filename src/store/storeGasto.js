import {defineStore} from 'pinia';

export const useStore = defineStore('main',{
    state: () =>{
        var today = new Date();
        return {listaGastos: [], sueldo: 0}
    },

    actions: {
        agregarGasto(obj){
            this.listaGastos.push(obj)
        },
        agregarSueldo(numero){
            this.sueldo = numero;
        }
        
    }
})