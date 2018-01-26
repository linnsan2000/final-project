import React from "react"
import "index.css"
import { Link } from "react-router-dom"

export default class ReadMoreView extends React.Component {

  render() {
    return (
      <div className="Container">
        <p>Här ska det stå en text om frågan man har tryckt på för att få läsa på mer.</p>
        <Link to="/questions"><button className="btn">
          TILLBAKA TILL TESTET</button>
        </Link>
      </div>
    )
  }
}