import React from "react"
import "index.css"
// import Item from ".././item"

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      questions: [],
      partyCounter: [{
        _id: 0,
        party: ""
      }],
      parties: {
        Vänsterpartiet: 0,
        Socialdemokraterna: 0,
        Sverigedemokraterna: 0,
        Moderaterna: 0,
        Miljöpartiet: 0,
        Liberalerna: 0,
        Centerpartiet: 0,
        Kristdemokraterna: 0
      },
      winningParty: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions/")
      .then(response => (
        response.json()
      )).then(json => {
        this.shuffle(json)
        this.setState({
          questions: json
        }, () => { console.log(json) })
      })
  }

  shuffle = array => {
    let counter = array.length
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter)
      // Decrease counter by 1
      counter -= 1
      // And swap the last element with it
      const temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
  }

  handleNoAnswer = event => {
    event.preventDefault()
    this.setState({
      answer: false,
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    }, () => {
      console.log("Svaret", this.state.questions[this.state.currentQuestionIndex].party, this.state.answer, this.state.currentQuestionIndex)
    })
  }

  handleYesAnswer = () => {
    const choosenParty = this.state.questions[this.state.currentQuestionIndex].party
    const newCounter = [...this.state.partyCounter, {
      _id: this.state.currentQuestionIndex,
      party: choosenParty,
      answer: true
    }]

    const parties = { ...this.state.parties }
    parties[choosenParty] = this.state.parties[choosenParty] + 1
    let winningParty = null

    if (parties[choosenParty] >= 2) {
      winningParty = choosenParty
    }
    this.setState({
      partyCounter: newCounter,
      answer: true,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      parties,
      winningParty
    }, () => {

    })
  }

  render() {
    return (
      <div className="questionContainer">
        {this.state.questions.length > 0
          ?
          <div>
            <h1>{this.state.questions[this.state.currentQuestionIndex].question}
            </h1>
            <button
              className="no-btn"
              value="no"
              onClick={this.handleNoAnswer}>NEJ
            </button>
            <button
              className="yes-btn"
              value="yes"
              onClick={this.handleYesAnswer}>JA
            </button>
            <h1>Du har mest gemensamt med {this.state.winningParty}</h1>
          </div>
          :
          <div>
            <h1>Loading questions...
            </h1>
          </div>
        }
      </div>
    )
  }
}
