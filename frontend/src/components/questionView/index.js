import React from "react"
import "index.css"
import QuestionItem from "./../question-item"

export default class QuestionView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      partyCounter: [],
      answer: true
    }
  }

  // handleYesAnswer = id => {
  //   const yesAnswers = [...this.state.answer]
  //   if (answer === "yes") => {
  //     this.setState({
  //       partyCounter: yesAnswers // spara alla svar i ny array
  //        and... {this.state.questions[this.state.currentQuestionIndex].question}
  //     })
  //   } else (answer === "no") => {
  //     yesAnswers.splice(id, 1)
  //     this.setState({
  //       partyCounter: "" // uppdatera EJ array
  //     })
  //   }
  // }

  handleNoAnswer = event => {
    event.preventDefault()
    // const nextQ = this.props.questions[this.props.currentQuestionIndex + 1].question
    this.setState({
      answer: false
    }, () => {
      console.log("Svaret", this.state.answer)
    })
  }

  handleYesAnswer = event => {
    event.preventDefault()
    // this.props.questions(this.state.partyCounter, this.state.answer)
    this.setState({
      partyCounter: [],
      answer: true
    })
  }

  render() {
    return (
      <div>
        <QuestionItem />
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
      </div>
    )
  }
}
