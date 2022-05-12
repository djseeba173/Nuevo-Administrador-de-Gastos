import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    getGestionGastos(){
        return apiClient.get('/api/getlista')
    },
    setGestionGastos(gestionGasto){
        return apiClient.post('/api/setgestiongasto', gestionGasto)
    },
    deleteGestionGastos(id){
        return apiClient.delete('/api/deleteestionasto' + id);
    }
}