const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello word 123'));

app.listen(port, () => {
  console.log(`App listerning on port ${port}`);
});
