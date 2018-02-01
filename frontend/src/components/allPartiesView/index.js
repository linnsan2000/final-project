import React from "react"
import "index.css"

import Vlogo from "./../images/v_logo.png"
import Slogo from "./../images/s_logo.png"
import Mplogo from "./../images/mp_logo.png"
import Mlogo from "./../images/m_logo.png"
import Llogo from "./../images/l_logo.png"
import Sdlogo from "./../images/sd_logo.png"
import Kdlogo from "./../images/kd_logo.png"
import Clogo from "./../images/c_logo.png"

export default class AllPartiesView extends React.Component {

  render() {
    return (
      <div>
        <div className="parties-container">
          <h1>Här kan du läsa mer om vad alla sju riksdagspartierna tycker</h1>
          <div className="partybox">
            <img src={Clogo} alt="C-logga"id="logo" />
            <a href="http://www.centerpartiet.se" id="partylink"><h2>Centerpartiet</h2></a>
          </div>
          <div className="partybox">
            <img src={Kdlogo} alt="KD-logga" id="logo" />
            <a href="http://www.kristdemokraterna.se" id="partylink"><h2>Kristdemokraterna</h2></a>
          </div>
          <div className="partybox">
            <img src={Llogo} alt="L-logga" id="logo" />
            <a href="http://www.liberalerna.se" id="partylink"><h2>Liberalerna</h2></a>
          </div>
          <div className="partybox">
            <img src={Mlogo} alt="M-logga" id="logo" />
            <a href="http://www.moderaterna.se" id="partylink"><h2>Moderaterna</h2></a>
          </div>
          <div className="partybox">

            <img src={Mplogo} alt="Mp-logga" id="logo" />
            <a href="http://www.miljopartiet.se" id="partylink"><h2>Miljöpartiet</h2></a>
          </div>
          <div className="partybox">
            <img src={Slogo} alt="S-logga" id="logo" />
            <a href="http://www.socialdemokraterna.se" id="partylink"><h2>Socialdemokraterna</h2></a>
          </div>
          <div className="partybox">

            <img src={Sdlogo} alt="SD-logga" id="logo" />
            <a href="http://www.sverigedemokraterna.se" id="partylink"><h2>Sverigedemokraterna</h2></a>
          </div>
          <div className="partybox">
            <img src={Vlogo} alt="V-logga" id="logo" />
            <a href="http://www.vansterpartiet.se" id="partylink"><h2>Vänsterpartiet</h2></a>
          </div>
        </div>
      </div>
    )
  }
}
