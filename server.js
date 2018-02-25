const express = require('express');
const app = express();
const port = 5000;


// get all the data 
app.get('/api/students', (req, res) => {
  const data = [{
    id: 1,
    firstname: 'Edmar',
    lastname: 'Diaz'
  }];
  res.json(data);
});

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});