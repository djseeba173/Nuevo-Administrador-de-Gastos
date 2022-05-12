// Sistema estilo prototipo
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 3001;

// simulo una base de datos en memoria

const lista = [
    {importe:150, desc:'Changuchito', categoria: 'Comida'},
    {importe: 300, desc: 'Gaseosa', categoria: 'Bebida'},
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/getlista', (req, res) => {
    res.json(lista)
  })

app.post('/api/setgestiongasto', (req, res) => {
  console.log(req.body)
  lista.push(req.body)
  res.json(req.body)
})

app.delete('/api/deletegestiongasto/:id', (req, res) => {
  const listaDesc = lista.map(e => {return e.desc})
  const indice = listaDesc.indexOf(req.params.codigo)
  lista.splice(indice, 1)
  res.json(req.params)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})