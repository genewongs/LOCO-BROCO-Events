const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 3000 || process.env.PORT;
const cors = require('cors');
const axios = require('axios');
const controller = require('./controller');
const path = require('path');

//MIDDLEWARE
app.use(express.static('client/dist'));
app.use(cors());
app.use(express.json());

//ROUTES
app.get('/events', controller.get);
app.post('/events', controller.post);
app.delete('/events', controller.delete);

//API ROUTE
app.get('/api/events', controller.searchAPI);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})