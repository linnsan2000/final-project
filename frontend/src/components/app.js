import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import QuestionView from "./questionView"
import StartView from "./startView"
// import MatchView from "./matchView"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={StartView} />
          <Route path="/questions" component={QuestionView} />
          {/* <Route path="/match" component={MatchView} /> */}
        </div>
      </BrowserRouter>
    )
  }
}
