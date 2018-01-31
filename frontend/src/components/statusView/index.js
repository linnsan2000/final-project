import React from "react"
import { BarChart, YAxis, XAxis, Bar, Tooltip, Legend, CartesianGrid } from "recharts"
import "index.css"

export default class StatusView extends React.Component {

  dataForChart = () => (
    Object.keys(this.props.status).map(partyName => ({
      name: partyName,
      score: this.props.status[partyName]
    }))
  )

  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <p>Vänsterpartiet {this.props.status.Vänsterpartiet}</p>
          <p>Socialdemokraterna {this.props.status.Socialdemokraterna}</p>
          <p>Miljöpartiet {this.props.status.Miljöpartiet}</p>
          <p>Centerpartiet {this.props.status.Centerpartiet}</p>
          <p>Sverigedemokraterna {this.props.status.Sverigedemokraterna}</p>
          <p>Moderaterna {this.props.status.Moderaterna}</p>
          <p>Kristdemokraterna {this.props.status.Kristdemokraterna}</p>
          <p>Liberalerna {this.props.status.Liberalerna}</p>
          <BarChart
            width={400}
            height={500}
            data={this.dataForChart()} >
            <XAxis type="category" dataKey="name" />
            <YAxis type="number" ticks={[0, 1, 2, 3]} />
            <Bar dataKey="score" fill="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
          </BarChart>
          <button
            onClick={this.props.onClose}><i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  }
}
