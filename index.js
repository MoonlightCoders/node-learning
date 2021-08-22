const express = require('express')
const routes = require('./routes');
const app = express()

require('./config/db');
app.use(routes);

// app.use('api/', routes);

app.listen(3000)
