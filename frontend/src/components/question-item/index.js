import React from "react"
import "index.css"
// import Item from ".././item"

export default class QuestionItem extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     questions: []
  //   }
  // }
  //
  // componentDidMount() {
  //   fetch("http://localhost:8080/questions/")
  //     .then(response => (
  //       response.json()
  //     )).then(json => {
  //       this.setState({
  //         questions: json
  //       }, () => { console.log(json) })
  //     })
  // }

  render() {
    return (
      <div className="questionContainer">
        <h1>{this.props.question}</h1>
        <p>{this.props.party}</p>
      </div>
    )
  }
}
