const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 3000 || process.env.PORT;
const cors = require('cors');
const axios = require('axios');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(cors());

// app.get('/api/movies', controller.get);
// app.post('/api/movies', controller.post);

const tm = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/events.json'
});

app.get('/api', (req, res) => {
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=Korn&apikey=${process.env.APIKEY}`)
    .then((response) => res.send(response.data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})