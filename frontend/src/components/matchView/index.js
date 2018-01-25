import React from "react"
import "index.css"

import v from "./../images/sjostedt.jpg"
import s from "./../images/lofven.jpg"
import mp from "./../images/lovinfridolin.jpg"
import m from "./../images/kristersson.jpg"
import l from "./../images/bjorklund.jpg"
import sd from "./../images/akesson.jpg"
import kd from "./../images/buschthor.jpg"
import c from "./../images/loof.jpg"


const images = [v, s, mp, m, l, sd, kd, c]

handleMatchingImage = image => {
  this.setState({
    image
  })
}

export default class matchView extends React.Component {

  render() {
    return (
      <div>
        {/* // show matching image */}
        <img className="matchingImage" src={this.props.matchingImage} alt="" />
      </div>
    )
  }
}
