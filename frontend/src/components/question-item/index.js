import React from "react"
import "index.css"

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions").then(response => (
      response.json()
    )).then(json => {
      this.setState({
        question: json
      }, () => { console.log(json) })
    })
  }

  render() {
    return (
      <div>
        <div
          type="text"
          name="name"
          value={this.state.question} />
      </div>
    )
  }

}
