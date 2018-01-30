import React from "react"
import { Link } from "react-router-dom"
import "index.css"
import ReadMoreView from "./../readMoreView"
import LastPage from ".././lastPage"
import MatchView from ".././matchView"
import Navigation from ".././navigation"
import StatusView from ".././statusView"

export default class QuestionItem extends React.Component {
  constructor(props) {
    const questions = JSON.parse(localStorage.getItem("savedData"))
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      questions: questions || [],
      partyCounter: [{
        _id: 0,
        party: ""
      }],
      parties: {
        Vänsterpartiet: 0,
        Socialdemokraterna: 0,
        Sverigedemokraterna: 0,
        Moderaterna: 0,
        Miljöpartiet: 0,
        Liberalerna: 0,
        Centerpartiet: 0,
        Kristdemokraterna: 0
      },
      winningParty: null,
      isButtonDisabled: false,
      isOpen: false,
      statusIsOpen: false
    }
  }

  componentDidMount() {
    this.setQuestions(this.questions)
  }

  setQuestions() {
    fetch("http://localhost:8080/questions/")
      .then(response => (
        response.json()
      )).then(json => {
        this.shuffle(json)
        this.setState({
          questions: json
        }, () => {
          localStorage.setItem("savedData", JSON.stringify(this.state.questions))
        })
      })
  }

  shuffle = array => {
    let counter = array.length
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter)
      // Decrease counter by 1
      counter -= 1
      // And swap the last element with it
      const temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
  }

  handleNoAnswer = event => {
    event.preventDefault()
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    })
  }

  handleYesAnswer = () => {
    const choosenParty = this.state.questions[this.state.currentQuestionIndex].party
    const newCounter = [...this.state.partyCounter, {
      _id: this.state.currentQuestionIndex,
      party: choosenParty
    }]

    const parties = { ...this.state.parties }
    parties[choosenParty] = this.state.parties[choosenParty] + 1
    let winningParty = null

    if (parties[choosenParty] >= 3) {
      winningParty = choosenParty
    }
    this.setState({
      partyCounter: newCounter,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      parties,
      winningParty
    }, () => {
    })
  }

  handleSuperlike = () => {
    const choosenParty = this.state.questions[this.state.currentQuestionIndex].party
    const newCounter = [...this.state.partyCounter, {
      _id: this.state.currentQuestionIndex,
      party: choosenParty
    }]

    const parties = { ...this.state.parties }
    parties[choosenParty] = this.state.parties[choosenParty] + 2
    let winningParty = null

    if (parties[choosenParty] >= 3) {
      winningParty = choosenParty
    }
    this.setState({
      partyCounter: newCounter,
      currentQuestionIndex: this.state.currentQuestionIndex + 2,
      parties,
      winningParty,
      isButtonDisabled: true
    }, () => {

    })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleStatus = () => {
    this.setState({
      statusIsOpen: !this.state.statusIsOpen
    })
  }

  render() {
    if (this.state.currentQuestionIndex === this.state.questions.length) {
      return (
        <LastPage />
      )
    } else if (this.state.winningParty !== null) {
      return (
        <div className="blur">
          <MatchView
            winningParty={this.state.winningParty} />
        </div>
      )
    } else {
      return (
        <div className="questionContainer">
          {this.state.questions.length > 0
            ?
            <div className="content">
              <h2>{this.state.questions[this.state.currentQuestionIndex].question}
              </h2>
              <button
                className="info-btn"
                onClick={this.toggleModal}>
                <i className="fa fa-info-circle" aria-hidden="true" />
                &nbsp; Läs mer om den här frågan
              </button>
              <button
                className="status-btn"
                onClick={this.toggleStatus}>
                <i className="fa fa-info-circle" aria-hidden="true" />
                &nbsp; Se ställningen just nu
              </button>
            </div>
            :
            <div>
              <h1>Loading questions...
              </h1>
            </div>
          }
          <div>
            <ReadMoreView
              show={this.state.isOpen}
              onClose={this.toggleModal} />
            <StatusView
              show={this.state.statusIsOpen}
              onClose={this.toggleStatus}
              status={this.state.partyCounter} />
            <Navigation
              handleNoAnswer={this.handleNoAnswer}
              handleYesAnswer={this.handleYesAnswer}
              handleSuperlike={this.handleSuperlike}
              isButtonDisabled={this.state.isButtonDisabled} />
          </div>
        </div>
      )
    }
  }
}
