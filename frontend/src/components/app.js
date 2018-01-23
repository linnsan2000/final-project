import React from "react"
import QuestionItem from "./question-item"

class App extends React.Component {
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
    if (this.state.questions.length > 0) {
      return (
        <div>
          {this.state.questions[this.state.currentQuestionIndex].question}
        Thera are questions!
        </div>)
    } else {
      return (
        <div>
        No questions yet
        </div>)
    }
  }
}

export default App
