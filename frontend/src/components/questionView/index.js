import React from "react"
// import ReactSwipe from "react-swipe"
import "index.css"
import QuestionItem from "./../question-item"
import ReadMoreView from "./../readMoreView"

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="container">
        <QuestionItem />
        <button
          className="btn"
          onClick={this.toggleModal}>
          Läs mer om den här frågan
        </button>
        <ReadMoreView
          show={this.state.isOpen}
          onClose={this.toggleModal} />
      </div>
    )
  }
}
