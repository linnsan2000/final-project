import React from "react"
import QuestionItem from "./question-item"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0
      // questions: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions/")
      .then(data => data.json())
      .then(data => {
        const questiondata = data[this.state.currentQuestionIndex]
        JSON.stringify(questiondata)
        console.log(questiondata)
      })
  }

  render() {
    // const question = questionData[this.state.currentQuestionIndex]
    return (
      <div>
        {this.currentQuestionIndex}
        {/* {this.state.questions.map(item => ( */}
        {/* <QuestionItem */}
          {/* // key={this.state.currentQuestionIndex}
          // id={questiondata._id}
          // question={questiondata.question}
          // party={questiondata.party}
          // answer="true"
        // /> */}
        {/* ))} */}
      </div>
    )
  }

}

export default App
