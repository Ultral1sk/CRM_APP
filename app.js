const express     = require('express');
const app         = express();
const connectDB   = require('./config/db');

require('dotenv').config();

//DB connection
connectDB();

// Body parser outter middleware of Express
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/dashboard', require('./router/home'));
app.use('/api/auth', require('./router/auth'));

//server port loader
const PORT    = process.env.PORT || 5001
app.listen(PORT, () => console.log(`CRM APP server is listening the ${PORT} port`));

