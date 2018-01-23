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
    this.setState({
      answer: false
    })
    return this.props.questions[this.props.currentQuestionIndex].question + 1
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
          onClick={this.handleNoAnswer}>NEJ
        </button>
      </div>
    )
  }
}
