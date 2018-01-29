import React from "react"
import "index.css"

// import v from "./../images/sjostedt.jpg"
// import s from "./../images/lofven.jpg"
// import mp from "./../images/lovinfridolin.jpg"
// import m from "./../images/kristersson.jpg"
// import l from "./../images/bjorklund.jpg"
// import sd from "./../images/akesson.jpg"
// import kd from "./../images/buschthor.jpg"
// import c from "./../images/loof.jpg"

// const images = [v, s, mp, m, l, sd, kd, c]

export default class MatchView extends React.Component {

//   handleMatchingImage = () => {
//     if (this.props.winningParty === ima
// }

  render() {
    return (
      <div className="winning-container">
        <h3>Du har mest gemensamt med {this.props.winningParty}</h3>
        {/* // show matching image */}
        {/* <img className="matchingImage" src={if ({this.images} === {this.props.winningParty}) ? {this.images} : ""  } alt="" /> */}
      </div>
    )
  }
}
