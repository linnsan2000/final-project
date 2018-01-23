import React from "react"
import QuestionItem from "./question-item"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentQuestionIndex: 0
      questions: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions/").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ questions: json })
    })
  }

  render() {
    // const question = data[this.state.currentQuestionIndex]
    return (
      <div>
        {this.state.questions.map(item => (
          <QuestionItem
            key={item._id}
            id={item._id}
            question={item.question}
            party={item.party}
            answer="true" />
        ))}
      </div>
    )
  }

}

export default App
