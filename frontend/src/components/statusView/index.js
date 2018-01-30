import React from "react"
import "index.css"

export default class StatusView extends React.Component {

  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <p>{this.props.partyCounter}</p>
          <button
            onClick={this.props.onClose}><i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  }
}
