import {defineStore} from 'pinia';

export const useStore = defineStore('main',{
    state: () =>{
        return {sueldo: 0, listaGastos: []}
    },

    actions: {
        ponerSueldo(num){
            this.sueldo = num;
        },
        agregarGasto(obj){
            this.listaGastos.push(obj)
        },
        
    }
})