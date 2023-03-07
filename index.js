// get env varibale to app
require('dotenv').config();
// init express server
const express = require('express');
const app = express();

// init mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
})
.catch(err => {
    console.log({ database_error: err });
});

// configure body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const Routes = require("./routes"); 
app.use("/", Routes);

// port and listen the app
const port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log('listening on port: ' + port);
});
