import React from "react"
import "index.css"

export default class MatchView extends React.Component {

  render() {
    return (
      <div className="winning-container">
        <h3>Du har mest gemensamt med {this.props.winningParty}</h3>
        {/* // show matching image */}
        {/* <img className="matchingImage" src={this.images} alt="" /> */}
        <img className="matchImg" src={this.props.matchImg} alt="" />
      </div>
    )
  }
}
