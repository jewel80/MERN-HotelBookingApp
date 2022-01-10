const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://jeweldb:Nq3euqdpmTTNAp8d@cluster0.ukmc1.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', ()=>{
    console.log('MongoDB connection Fail!')
})

connection.on("connected", () => {
  console.log("MongoDB connection succesfull");
});

module.exports = mongoose