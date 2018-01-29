import React from "react"
import "index.css"
// import { Link } from "react-router-dom"

export default class ReadMoreView extends React.Component {

  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <p>Här ska det stå en text om frågan man har tryckt på för att få läsa på mer.</p>
          <button
            className="btn"
            onClick={this.props.onClose}>
          TILLBAKA TILL TESTET
          </button>
        </div>
      </div>
    )
  }
}
