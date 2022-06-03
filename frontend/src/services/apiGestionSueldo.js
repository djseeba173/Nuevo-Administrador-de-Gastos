import axios from 'axios';

const sueldoClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    getGestionSueldo(){
        return sueldoClient.get('/api/getsueldo')
    },
    setGestionSueldo(gestionSueldo){
        return sueldoClient.post('/api/setsueldo', gestionSueldo)
    },
}