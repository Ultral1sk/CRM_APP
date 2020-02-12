const express     = require('express');
const app         = express();
const connectDB   = require('./config/db');

require('dotenv').config();


connectDB();

app.get('/', ( req, res ) =>  res.send('Hi from HOME PAGE'))

const PORT    = process.env.PORT || 5001
app.listen(PORT, () => console.log(`CRM APP server is listening the ${PORT} port`));

