import React from "react"
import "./index.css"

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
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     mounted: false
  //   }
  // }

  // componentDidMount() {
  //   this.toggleImage()
  // }
  //
  // toggleImage = () => {
  //   this.setState({
  //     mounted: true
  //   })
  // }

  render() {
    return (
      <div className="blur">
        <h1 id="match-style">Du har en matchning!</h1>
        <img
          className="matchImg"
          src={images[this.props.winningParty]}
          // onLoad={this.toggleImage}
          // show={this.state.mounted}
          alt="" />
        <div className="winning-container">
          <h2>Testet visar att tycker likadant som {this.props.winningParty} i flera frågor</h2>
        </div>
      </div>
    )
  }
}
