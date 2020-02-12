const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 5001


app.get('/', ( req, res ) =>  res.send('Hi from HOME PAGE'))

app.listen(PORT, () => console.log(`CRM APP server is listening the ${PORT} port`));

