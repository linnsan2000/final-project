import React from "react"
import { Link } from "react-router-dom"
import "index.css"
import logoImage from "./../images/logo.png"

export default class Header extends React.Component {

  render() {
    return (
      <Link to="/">
        <div className="header-container">
          <img className="logo-image" src={logoImage} alt="Logo for Swote" />
          <h5 className="logo">Swote</h5>
        </div>
      </Link>
    )
  }
}
