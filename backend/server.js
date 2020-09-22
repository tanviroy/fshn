// This is the entry point for the backend (aka the index.js file). 
// All backend dependencies are connected here. Mongoose has to be connected and RESTful routes defined.

import express from 'express';
import data from './data';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})