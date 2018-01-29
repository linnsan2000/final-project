import React from "react"
import "index.css"
import QuestionItem from "./../question-item"

export default class QuestionView extends React.Component {

  render() {
    return (
      <div className="container">
        <QuestionItem />
      </div>
    )
  }
}
