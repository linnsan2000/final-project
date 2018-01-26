import React from "react"
import { Link } from "react-router-dom"

export default class lastPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Oops</h1>
        <Link to="/">
          <button className="btn">
            Gör testet igen
          </button>
        </Link>
      </div>
    )
  }
}
