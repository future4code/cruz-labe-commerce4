import React, { Component } from 'react'
import styled from 'styled-components'

// import { listaProdutos } from './assets/json'



export class ProdutoCard extends Component {
    render() {

        return (
            <ProdutoCardContainer>
                <ImageCardContainer src={this.props.imagem} alt="" />
                <p>{this.props.nome}</p>
                <p>{this.props.descricao}</p>
                <p>{this.props.valor} </p>
                {/* {this.props.nome.split('').reverse().join('')} */}
                <ButtonCardContainer
                onClick={() => this.props.adicionarProduto(this.props.id)}>
                  Adicionar ao carrinho
              </ButtonCardContainer>
            </ProdutoCardContainer>
        )
    }
}

const ProdutoCardContainer = styled.div`
width: 200px;
/* background-color:yellow; */
border: 1px solid black;
text-align: center;
margin-bottom: 16px;

`
const ImageCardContainer =  styled.img`
width:100%;
`

const ButtonCardContainer = styled.button`
margin-bottom:24px;
`


