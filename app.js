const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 5001

app.listen(PORT, () => console.log(`CRM APP server is listening the ${PORT} port`));

