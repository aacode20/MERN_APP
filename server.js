const express = require('express'); //backend framework
const mongoose = require('mongoose'); //ORM to interact with MongoDB
const bodyParser = require('body-parser'); //allow to take request and get data from body
const path = require('path'); //to deal with file paths, part of node

const items = require('./routes/api/items');
// require is a method from node js that allows loading of modules

const app = express(); //initializing module as a variable

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const dbaccess = require('./config/keys').mongoURI; //getting mongoURI from keys.js

// Connecting to MongoDB database
mongoose.connect(dbaccess, {useNewUrlParser: true}) 
        .then(() => console.log('Connected to MongoDB database!')) //If success then log this, else log error
        .catch(err => console.log('There was an error connecting to the database!\n' + err));

app.use('/api/items', items); //app.use tells the app what to do, in this case routes any requests to api/items to the items variable aka routes/api/items.js'

if(process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'));

        app.get('*',(req,res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));