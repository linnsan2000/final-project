import React from "react"
import "index.css"

import Vänsterpartiet from "./../images/sjostedt.jpg"
import Socialdemokraterna from "./../images/lofven.jpg"
import Miljöpartiet from "./../images/lovinfridolin.jpg"
import Moderaterna from "./../images/kristersson.jpg"
import Liberalerna from "./../images/bjorklund.jpg"
import Sverigedemokraterna from "./../images/akesson.jpg"
import Kristdemokraterna from "./../images/buschthor.jpg"
import Centerpartiet from "./../images/loof.jpg"

const images = {
  Vänsterpartiet,
  Socialdemokraterna,
  Miljöpartiet,
  Moderaterna,
  Liberalerna,
  Sverigedemokraterna,
  Kristdemokraterna,
  Centerpartiet
}

export default class MatchView extends React.Component {

  render() {
    return (
      <div className="winning-container">
        <h3>Du har mest gemensamt med {this.props.winningParty}</h3>
        <img className="matchImg" src={images[this.props.winningParty]} alt="" />
      </div>
    )
  }
}
