import {defineStore} from 'pinia';
import axios from 'axios'

export const usuarioStore = defineStore('main',{
    state: () =>{
        return {
            usuario: {},
            estaLogeado: false,
        }
    },

    actions: {
        async registerUser(usuario){
            try{
                const data = await axios.post('http://localhost:3001/api/login', usuario);
                this.estaLogeado = true;
                localStorage.setItem('usuario', JSON.stringify(data))
            }catch(error){
                console.log(error);

            }
        },
        userLogout(){
            debugger
            this.estaLogeado = false
            debugger
            // location.reload();
            debugger
            localStorage.removeItem('usuario')
            debugger
        }
    },
})