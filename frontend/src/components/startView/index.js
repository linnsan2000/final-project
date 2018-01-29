import React from "react"
import "index.css"
import { Link } from "react-router-dom"

export default class StartView extends React.Component {

  render() {
    return (
      <div className="page-container">
        <h1><span className="Sacramento">Matcha med rätt parti</span></h1>
        <h4>
          <span className="bold-text">Har du svårt att välja vilket parti som ska få din röst?
        Gör vår valkompass! Lite som Tinder, fast med politiker. Typ.
          </span>
        </h4>
        <p><span className="bold-text">Så här gör man:</span><br />
          På skärmen dyker det upp ett antal påståenden – håller du med om påståendet så klickar på du <i className="fa fa-heart" aria-hidden="true" />. Håller du inte med – klicka på <i className="fa fa-times" aria-hidden="true" />.
        </p>
        <p>Under testet har du EN SUPERLIKE <i className="fa fa-star" aria-hidden="true" /> som du kan använda på en fråga som är extra viktig för dig.
        </p>
        <Link to="/questions">
          <button className="btn">
            STARTA TESTET
          </button>
        </Link>
      </div>
    )
  }
}
