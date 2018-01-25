import React from "react"
import "index.css"
import { Link } from "react-router-dom"

export default class StartView extends React.Component {

  render() {
    return (
      <div className="Container">
        <button>
          <Link to="/questions">Starta testet</Link>
        </button>
      </div>
    )
  }
}
