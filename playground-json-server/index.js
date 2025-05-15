import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express = require('express')
const app = express ()

server.use(middlewares);
server.use(router);

const port = 3000;


app.get('/test', (req, res)=> {
  res.send('Hello world')
})

app.listen(port, (req, res) => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});
