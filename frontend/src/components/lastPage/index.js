import React from "react"
import { Link } from "react-router-dom"

export default class lastPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Oops</h1>
        <button>
          <Link to="/">Gör testet igen</Link>
        </button>
      </div>
    )
  }
}
