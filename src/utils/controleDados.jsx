  export function salvarDados(nome, dados) {
    if (nome && dados) {
      this.setState({ [nome]: dados })
      localStorage[nome] = JSON.stringify(dados)
    } else {
      console.warn('Tentando salvar no localStorage sem valor ne amigao?')
    }
  }
  
  export function restaurarDados(nome) {
    console.log(this)
    if (nome) {
      const dados = localStorage[nome]
      dados && this.setState({ [nome]: JSON.parse(dados) })
    } else {
      console.warn('Tentando restaurar dados sem informar nada hein...')
    }
  }

  export function removerDados(nome) {
    if (nome) {
      const dados = Array.isArray(this.state[nome]) ? [] : ''
      this.setState({ [nome]: dados })
      localStorage.removeItem(nome)
    } else {
      console.warn('Tentando remover item sem falar oq remover ne amigao?')
    }
  }