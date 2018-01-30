import React from "react"
import logoImage from "./../images/logo.png"

export default class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <img className="logo-image" src={logoImage} alt="Logo for Swote" />
        <h5 className="logo">Swote</h5>
      </div>
    )
  }
}
