import React from "react"
import "index.css"
import QuestionItem from "./../question-item"

export default class QuestionView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: ""
    }
  }

  // handleAnswer = id => {
  //   const yesAnswers = [...this.state.answer]
  //   if (answer === "yes") => {
  //     this.setState({
  //       counter: yesAnswers // spara alla svar i ny array
  //        and... showNewQuestion
  //     })
  //   } else (answer === "no") => {
  //     yesAnswers.splice(id, 1)
  //     this.setState({
  //       counter: "" // uppdatera EJ array
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <QuestionItem />
        <button className="yes-btn" value="yes" onClick={this.handleAnswer}>JA</button>
        <button className="no-btn" value="no" onClick={this.handleAnswer}>NEJ</button>
      </div>
    )
  }
}
