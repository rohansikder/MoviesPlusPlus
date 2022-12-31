//Rohan Sikder - G00389052
const express = require('express') //Import Express
const app = express()
const bodyParser = require('body-parser') //Import Body Parser
const mongoose = require('mongoose')// Import mongoose
const cors = require('cors') //Import Cors
const port = 4000 //Port

//For cors policy
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Calling async main
main().catch(err => console.log(err));


async function main() {
    //Connect to my mongodb database
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.rhqvnnf.mongodb.net/?retryWrites=true&w=majority');
}

//Format which data will be in
const movieSchema = new mongoose.Schema({
    title: String,
    cover: String,
    description: String,
    runtime: Number,
    cast: String
});

const movieModel = mongoose.model('allMovies', movieSchema);

//Post request to get title, cover, description, runtime, cast
app.post('/api/movies', (req, res) => {
    console.log(req.body);
    movieModel.create({
        title: req.body.title,
        cover: req.body.cover,
        description: req.body.description,
        runtime: req.body.runtime,
        cast: req.body.cast
    })
    res.send('Movie Received');
})

//Gets all json data from /api/movies
app.get('/api/movies', (req, res) => {
    movieModel.find((error, data) => {
        res.json(data);
    })
})

//Gets particular json data from /api/movies @ :id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);
    //The findById() function is used to find a single document by its _id field
    movieModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Delete request comes in from /api/movie/:id and then bookModel finds it and updates it and sends new data
app.put('/api/movies/:id', (req, res) => {
    console.log("Updating Movie: " + req.params.id);
    //The findByIdAndUpdate() function is used to find a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback
    movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

//Delete request comes in from /api/movies/:id and then movieModel finds it and deletes it
app.delete('/api/movies/:id', (req, res) => {
    console.log('Deleting Movie: ' + req.params.id);
    //The findByIdAndDelete() function is used to find a matching document, removes it, and passing the found document
    movieModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`Movie app listening on port ${port}`)
})