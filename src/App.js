import React, { Component } from 'react';
import './App.css';
import ListaProdutos from './ListaProdutos'

class App extends Component {
  state = {
    filtros: {
      valorMin: 0,
      valorMax: 0,
      ordem: true,
      inputPesquisar: ''
    },
    carrinho: [1, 3]

  }
  render () {
    //const produtos = ListaProdutos.filter(produto =>)
    //
    return (
      <div className="App">
        <h1>Lab Commerce</h1>
      </div>
    );
  }
}

export default App;
