import React from "react"
import "index.css"
// import Item from ".././item"

const parties = {
  Vänsterpartiet: [],
  Socialdemokraterna: [],
  Sverigedemokraterna: [],
  Moderaterna: [],
  Miljöpartiet: [],
  Liberalerna: [],
  Centerpartiet: [],
  Kristdemokraterna: []
}

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      questions: [],
      partyCounter: [{ _id: 0, party: "", answer: true }]
      // answer: true
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions/")
      .then(response => (
        response.json()
      )).then(json => {
        this.setState({
          questions: json
        }, () => { console.log(json) })
      })
  }

  handleNoAnswer = event => {
    event.preventDefault()
    this.setState({
      // answer: false,
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    }, () => {
      console.log("Svaret", this.state.questions[this.state.currentQuestionIndex].party, this.state.currentQuestionIndex)
    })
  }

  handleYesAnswer = () => {
    const newCounter = [...this.state.partyCounter]
    newCounter.push({
      _id: this.state.currentQuestionIndex,
      party: this.state.questions[this.state.currentQuestionIndex].party,
      // answer: true
    })
    this.setState({
      partyCounter: newCounter,
      // answer: true,
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    }
    // , () => {
    //   for (let choosenParty = 0; choosenParty < this.state.partyCounter.length; choosenParty += 1) {
    //     if (this.state.partyCounter[choosenParty].party.length > 0) {
    //       parties[this.state.partyCounter[choosenParty].party]
    //         .push(this.state.partyCounter[choosenParty].party)
    //     }
    //     if (parties[this.state.partyCounter[choosenParty].party]) {
    //       if (parties[this.state.partyCounter[choosenParty].party].length === 2) {
    //         console.log(`Du har mest gemensamt med ${parties[this.state.partyCounter[choosenParty].party][0]}`)
    //       }
    //     }
    //   }
    // }
    )
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
