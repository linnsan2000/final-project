import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import QuestionView from "./questionView"
import StartView from "./startView"
import Header from "./header"
import AllPartiesView from "./allPartiesView"
import StatusView from "./statusView"

// import ReadMoreView from "./readMoreView"
// import MatchView from "./matchView"

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={StartView} />
          <Route path="/questions" component={QuestionView} />
          <Route path="/all-parties" component={AllPartiesView} />
          <Route path="/status" component={StatusView} />
          {/* <Route path="/match" component={MatchView} /> */}
        </div>
      </BrowserRouter>
    )
  }
}
