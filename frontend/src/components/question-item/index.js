import React from "react"
import "index.css"
// import Item from ".././item"

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      questions: []
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

  render() {
    console.log("Alla frågor", this.state.questions)
    if (this.state.questions.length > 0) {
      return (
        <div>
          <h1>
            {this.state.questions[this.state.currentQuestionIndex].question}
          </h1>
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
  }
}
