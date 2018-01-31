import React from "react"
import "font-awesome/css/font-awesome.min.css"
import "./index.css"
// import QuestionItem from "./../question-item"

export default class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation">
        <button
          className="round-btn"
          value="no"
          onClick={this.props.handleNoAnswer}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <button
          className="round-btn"
          value="yes"
          onClick={this.props.handleSuperlike}
          disabled={this.props.isButtonDisabled}>
          <i className="fa fa-star" aria-hidden="true" />
        </button>
        <button
          className="round-btn"
          value="yes"
          onClick={this.props.handleYesAnswer}>
          <i className="fa fa-heart" aria-hidden="true" />
        </button>
      </div>
    )
  }
}
