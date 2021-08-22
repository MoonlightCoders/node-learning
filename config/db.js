const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/'
const dbName = 'learning'

const dbConnection =  mongoose.createConnection(url + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

dbConnection.on("open", () => {
  console.log('DB connected');
})


dbConnection.on("error", () => {
  console.log('Error in DB connection');
})

module.exports = {
  dbConnection
}