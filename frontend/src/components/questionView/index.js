import React from "react"
// import ReactSwipe from "react-swipe"
import "index.css"
import QuestionItem from "./../question-item"
import ReadMoreView from "./../readMoreView"

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: null
    }
  }

  handleReadMoreView = () => {
    this.setState({
      showInfo: !null
    })
  }

  render() {
    if (this.state.showInfo !== null && <ReadMoreView />) {
      return (
        <div>
          <ReadMoreView
            question={this.state.showInfo} />
        </div>
      )
    } else {
      return (
        <div className="container">
          <QuestionItem />
          <button
            className="info-btn"
            onClick={this.handleReadMoreView}>
            <i className="fa fa-info-circle" aria-hidden="true" />
            <p className="info-text">Läs mer om den här frågan</p>
          </button>
        </div>
      )
    }
  }
}
