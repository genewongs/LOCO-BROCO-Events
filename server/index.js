const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const cors = require('cors');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(cors());

// app.get('/api/movies', controller.get);
// app.post('/api/movies', controller.post);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})