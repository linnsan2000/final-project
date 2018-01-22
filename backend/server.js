import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

// Connect to MongoDB, on the "products-api" database. If the db doesn't
// exist, mongo will create it.
mongoose.connect("mongodb://localhost/compass-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

//
// Define a model here.
const User = mongoose.model("User", {
  name: {
    type: String,
    unique: true,
    required: true
  }
})

// Add more endpoints here!

app.get("/users", (req, res) => {
  User.find().then(allLogin => {
    res.json(allLogin)
  })
})

// Skapa ett item i mongodb
app.post("/users", (req, res) => {
  const { password } = req.body
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash
  })
  newUser.save() // Sparar nytt item i databasen
    .then(() => { res.status(201).send("Post created in Mongodb") }) // Promise: Skicka 201 till frontend när reglerna är uppfyllda & itemet är sparat
    .catch(err => { res.status(400).send(err) }) // Promise: Skicka status 400 +
    // felmeddelande till frontend när reglerna inte är uppfyllda
})

app.listen(8080, () => console.log("Compass API listening on port 8080!"))
