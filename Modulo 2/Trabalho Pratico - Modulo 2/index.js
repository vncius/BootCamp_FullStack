const express = require('express');
const app = express();
const routerState = require('./src/routes/routeStates.js');
const controllerState = require('./src/controller/controllerStates.js');

app.use(express.json());
app.use('/state', routerState);

app.listen(3000, async () => {
  console.log('listerning');
  await controllerState.init();
});
