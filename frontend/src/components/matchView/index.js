import React from "react"
import { Link } from "react-router-dom"
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

  render() {
    return (

      <div className="noflex-container">
        <h1 className="Satisfy white">Du har en matchning!</h1>
        <img className="matchImg" src={images[this.props.winningParty]} alt="" />
        <div className="winning-container">
          <h2>Testet visar att du tycker likadant som<span className="bold-text"> {this.props.winningParty} </span>i flera frågor</h2>
          <Link to="/all-parties">
            <button className="info-btn">
              <i className="fa fa-info-circle" aria-hidden="true" />
            &nbsp; Läs mer om de andra riksdagspartierna
            </button>
          </Link>
        </div>
        <br />
        <p><span className="bold-white">Gillar du inte din matchning? </span></p>
        <Link to="/">
          <button className="btn extramargin">GÖR TESTET IGEN</button>
        </Link>
      </div>
    )
  }
}
