const express = require('express')
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

require('./config/db');
app.use(routes);

// app.use('api/', routes);

app.listen(PORT)
