import React, { Component } from 'react'
import styled from 'styled-components'

// import { listaProdutos } from './assets/json'
import Button from '@material-ui/core/Button'



export class ProdutoCard extends Component {
    render() {

        return (
            <ProdutoCardContainer>
                <div>
                <ImageCardContainer src={this.props.imagem} alt="" />
                <h3>{this.props.nome}</h3>
                <p>{this.props.descricao}</p>
                <p>{this.props.valor} </p>
                {/* {this.props.nome.split('').reverse().join('')} */}
                </div>
                <Button variant="contained" color="primary" size="small"
                onClick={() => this.props.adicionarProduto(this.props.id)}>
                  Adicionar ao carrinho
              </Button>
            </ProdutoCardContainer>
        )
    }
}

const MeuBotao = styled(Button)`
* {
  background-color:green
}
span:first-of-type {color: red;z-index:2;}
`

const ProdutoCardContainer = styled.div`
width: 200px;
/* background-color:yellow; */
border: 1px solid black;
text-align: center;
margin-bottom: 16px;
display:flex;
flex-direction: column;

`
const ImageCardContainer =  styled.img`
width:100%;
height:110px;
`

const titleCardContainer = styled.p`

`

const ButtonCardContainer = styled.button`
/* margin-bottom:24px; */
height:100%;
/* width:100%; */
`



