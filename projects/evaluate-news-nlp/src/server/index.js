// Require Express to run server and routes
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

// Require API modules
const mockAPIResponse = require('./mockAPI.js')
const fetchAPI = require('./meaningCloud');

// Set Up Dot Environment
const dotenv = require('dotenv');
dotenv.config();

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

// Setup Server
const port = 3000
const server = app.listen(port, listening);

function listening() {
    console.log("Server running!")
    console.log("Running on localhost: " + port);
    console.log(__dirname)
}

//Integrate API key
const application_key = process.env.API_KEY
console.log(application_key)

// Initialize the main project folder
app.use(express.static('dist'))

// Routes
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
