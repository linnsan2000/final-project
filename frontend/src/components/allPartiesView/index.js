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
      <div className="content">
        <div className="parties-container">
          <h3 className="margin-bottom">Här kan du läsa mer om vad alla sju riksdags-partierna tycker</h3>
          <h6><img src={Clogo} alt="C-logga"id="logo" />
            <a href="http://www.centerpartiet.se" id="partylink">Centerpartiet</a>
          </h6><br />
          <h6><img src={Kdlogo} alt="KD-logga" id="logo" />
            <a href="http://www.kristdemokraterna.se" id="partylink">Kristdemokraterna</a>
          </h6><br />
          <h6><img src={Llogo} alt="L-logga" id="logo" />
            <a href="http://www.liberalerna.se" id="partylink">Liberalerna</a>
          </h6><br />
          <h6><img src={Mlogo} alt="M-logga" id="logo" />
            <a href="http://www.moderaterna.se" id="partylink">Moderaterna</a>
          </h6><br />
          <h6><img src={Mplogo} alt="Mp-logga" id="logo" />
            <a href="http://www.miljopartiet.se" id="partylink">Miljöpartiet</a>
          </h6><br />
          <h6><img src={Slogo} alt="S-logga" id="logo" />
            <a href="http://www.socialdemokraterna.se" id="partylink">Socialdemokraterna</a>
          </h6><br />
          <h6><img src={Sdlogo} alt="SD-logga" id="logo" />
            <a href="http://www.sverigedemokraterna.se" id="partylink">Sverigedemokraterna</a>
          </h6><br />
          <h6><img src={Vlogo} alt="V-logga" id="logo" />
            <a href="http://www.vansterpartiet.se" id="partylink">Vänsterpartiet</a>
          </h6>
        </div>
      </div>
    )
  }
}
