import React from "react"
import { Link } from "react-router-dom"
import Footer from "./../footer"
// import "index.css"

export default class StartView extends React.Component {

  render() {
    return (
      <div className="noflex-container">
        <div className="page-container">
          <h1><span className="Satisfy">Matcha med rätt parti</span></h1>
          <h4>
            <span className="bold-text">Har du svårt att välja vilket parti som ska få din röst?
            Gör vår valkompass! Lite som Tinder, fast med politiker. Typ.
            </span>
          </h4>
          <p><span className="bold-text">Så här gör man:</span><br />
            På skärmen dyker det upp ett antal påståenden – håller du med om påståendet så swajpar du höger, eller klickar på <i className="fa fa-heart smallicon" aria-hidden="true" />. Håller du inte med – swajpa vänster, eller klicka på <i className="fa fa-times smallicon" aria-hidden="true" />.
          </p>
          <p>Under testet har du <span className="bold-text">EN SUPERLIKE</span> <i className="fa fa-star smallicon" aria-hidden="true" /> som du kan använda på en fråga som är extra viktig för dig.
          </p>
          <Link to="/questions">
            <button className="btn">
              STARTA TESTET
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}
