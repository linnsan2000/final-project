import React from "react"
// import QuestionItem from "./question-item"

export default class Item extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.question}</h1>
        <p>{this.props.party}</p>
      </div>
    )
  }
}
