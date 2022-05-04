const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 3000 || process.env.PORT;
const cors = require('cors');
const axios = require('axios');
const controller = require('./controller');

//MIDDLEWARE
app.use(express.static('client/dist'));
app.use(cors());
app.use(express.json());

//ROUTES
app.get('/events', controller.get);
app.post('/events', controller.post);
app.get('/api/events', controller.searchAPI);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})