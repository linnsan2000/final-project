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
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/swote"
mongoose.connect(mongoUrl, { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

//
// Define a model here.
const Questions = mongoose.model("questions", {
  question: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  },
  answer: {
    type: Boolean
  }
})

// Add more endpoints here!

app.get("/questions", (req, res) => {
  Questions.find().then(allQuestions => {
    res.json(allQuestions)
  })
})
//
app.get("/questions/:id", (req, res) => {
  Questions.findOne({ _id: req.params.id }).then(question => {
    res.json(question.question)
  })
  // const oneQuestion = allQuestions.Questions.find(item => item.id === id)
  //   res.json(oneQuestion)
  // })
})


// Skapa ett item i mongodb
app.post("/questions", (req, res) => {
  const newQuestion = new Questions({
    question: req.body.question,
    party: req.body.party,
    answer: req.body.answer
  })
  newQuestion.save() // Sparar nytt item i databasen
    .then(() => { res.status(201).send("Post created in Mongodb") }) // Promise: Skicka 201 till frontend när reglerna är uppfyllda & itemet är sparat
    .catch(err => { res.status(400).send(err) }) // Promise: Skicka status 400 +
    // felmeddelande till frontend när reglerna inte är uppfyllda
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))
