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
      <div className="noflex-container">
        <h1 className="Sacramento white">Du har en matchning!</h1>
        <img className="matchImg" src={images[this.props.winningParty]} alt="" />
        <div className="winning-container">
          <h4>Testet visar att du tycker likadant som<span className="bold-text"> {this.props.winningParty} </span>i flera frågor</h4>
        </div>
      </div>
    )
  }
}
