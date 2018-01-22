import React from "react"

export default class Item extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.question}</h1>
        <h1>{this.props.id}</h1>
      </div>
    )
  }
}
