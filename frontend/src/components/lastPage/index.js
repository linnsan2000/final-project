import React from "react"
import { Link } from "react-router-dom"

export default class lastPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Oops! Det blev ingen match. Du kanske ska testa igen?</h1>
        <Link to="/">
          <button className="btn">GÖR TESTET IGEN</button>
        </Link>
      </div>
    )
  }
}
