// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');//add

// Start up an instance of app
const app = express();//add

/* Dependencies */
const bodyParser = require('body-parser') //add
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
//we can connect the other packages we have installed on the command line to our app in our code with the .use() method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');//add
app.use(cors());//add

// Initialize the main project folder
app.use(express.static('website'));

////////////////////creating a local server
const port = 5500;//add
// Setup Server
//////////////////////add
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

//https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1845/concepts/4fde0cb6-05ce-45c0-a9ba-5c996b3eb63a
app.get('/all', function (req, res) {
    // res.send(projectData);
    res.send(projectData);
})

// POST route
app.post('/addData', function (req, res) {
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        feelings: req.body.content,
    }
    // projectData.push(newEntry);
    // console.log(projectData);

    //The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Object.assign(projectData, newEntry);
    res.send(projectData);
    console.log(projectData);
});