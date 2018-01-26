import React from "react"
import "index.css"
import { Link } from "react-router-dom"

export default class StartView extends React.Component {

  render() {
    return (
      <div className="Container">
        <h1>MATCHA MED RÄTT PARTI</h1>
        <h4>Har du svårt att välja vilket parti som ska få din röst?
        Gör vår valkompass! Lite som Tinder, fast med politiker. Typ.
        </h4>
        <p>Så här gör man:
          På skärmen dyker det upp ett antal påståenden – håller du med om påståendet
          så swajpar du höger. Håller du inte med – swajpa vänster.
        </p>
        <p>Under testet har du EN SUPERLIKE som du kan använda på en fråga som
          är extra viktig för dig.
        </p>
        <Link to="/questions">
          <button className="starttest">
            STARTA TESTET
          </button>
        </Link>
      </div>
    )
  }
}
