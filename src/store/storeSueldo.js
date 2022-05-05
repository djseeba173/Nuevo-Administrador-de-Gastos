import {defineStore} from 'pinia';

export const useStore = defineStore('main',{
    state: () =>{
        return {sueldo: 0}
    },

    actions: {
        agregarSueldo(obj){
            this.sueldo = obj
        },
        
    }
})