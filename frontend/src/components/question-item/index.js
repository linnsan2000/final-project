import React from "react"
import "index.css"
import Item from ".././item"

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions")
      .then(response => (
        response.json()
      )).then(json => {
        this.setState({
          questions: json
        }, () => { console.log(json) })
      })
  }

  render() {
    return (
      <div>
        {this.state.questions.map(item => (
          <Item
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
