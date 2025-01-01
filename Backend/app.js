const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./router/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
}); 


//*Routes
app.use('/api/v1/users', userRoutes);

module.exports = app;