import React, { Component } from 'react'

export class LimitadorErro extends Component {
  state = {
    temErro: false,
    Mensagem: ''
  }
  
  componentDidCatch = (erro, info) => {
    this.setState({ temErro: true, Mensagem: erro})
  }
  
  render() {
    if (this.state.temErro) {
      return (
        <div>
          <h1>Houston, temos um problema!</h1>
          <h2>{this.state.Mensagem}</h2>
        </div>
      )
    } else {
      return this.props.children
    }
  }
  
}