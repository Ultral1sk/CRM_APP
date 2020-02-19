const express     = require('express');
const app         = express();
const connectDB   = require('./config/db');

require('dotenv').config();

//DB connection
connectDB();

// Body parser outter middleware of Express
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//CORS SETUP-------------------------------------------
app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*"); //Which adresses to allow to reach our API
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      ); //Which headers to send with request
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
      }
      next();
    });

app.use('/api/home', require('./router/home'));
app.use('/api/auth', require('./router/auth'));

//server port loader
const PORT    = process.env.PORT || 5001
app.listen(PORT, () => console.log(`CRM APP server is listening the ${PORT} port`));

