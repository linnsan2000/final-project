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
      partyCounter: [{ _id: 0, party: "", answer: true }],
      answer: true
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
      answer: false,
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    }, () => {
      console.log("Svaret", this.state.questions[this.state.currentQuestionIndex].party, this.state.answer, this.state.currentQuestionIndex)
    })
  }

  handleYesAnswer = () => {
    const newCounter = [...this.state.partyCounter]
    newCounter.push({
      _id: this.state.currentQuestionIndex,
      party: this.state.questions[this.state.currentQuestionIndex].party,
      answer: true
    })
    this.setState({
      partyCounter: newCounter,
      answer: true,
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    }, () => {
      for (let choosenParty = 0; choosenParty < this.state.partyCounter.length; choosenParty += 1) {
        if (this.state.partyCounter[choosenParty].party.length > 0) {
          parties[this.state.partyCounter[choosenParty].party]
            .push(this.state.partyCounter[choosenParty].party)
        }
        if (parties[this.state.partyCounter[choosenParty].party]) {
          if (parties[this.state.partyCounter[choosenParty].party].length === 2) {
            console.log(`Du har mest gemensamt med ${parties[this.state.partyCounter[choosenParty].party][0]}`)
          }
        }
      }
    })
  }

  render() {
    // console.log("Alla frågor", this.state.questions)
    if (this.state.questions.length > 0) {
      return (
        <div>
          <h1>
            {this.state.questions[this.state.currentQuestionIndex].question}
          </h1>
          {/* <p>{this.state.questions[this.state.currentQuestionIndex].party}</p> */}
          <button
            className="yes-btn"
            value="yes"
            onClick={this.handleYesAnswer}>JA
          </button>
          <button
            className="no-btn"
            value="no"
            // onSubmit={this.handleAnswerSubmit}
            onClick={this.handleNoAnswer}>NEJ
          </button>
          {/* {this.state.questions.map(question => (
            <div
              key={this.state.questions.id}
              question={this.state.questions.question}
              party={this.state.questions.party}
              answer={this.state.questions.answer} />
          ))} */}
        </div>)
    } else {
      return (
        <div>
        Loading questions...
        </div>)
    }
    <div className="parties-match">
      {
          parties.map(symbol => (<div
          id={symbol}/>
          ))
        }
    </div>
  }
}
