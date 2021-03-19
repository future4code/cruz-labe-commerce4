import React, { Component } from 'react'
import styled from 'styled-components'
import { ProdutoCard } from './ProdutoCard'

/// recebe a props produtos = lista de produtos
// this.props.produtos[0].nome = [ {nome: 'falcon1' valor: 1000}, {nome: valor: }]
export class Produtos extends Component {
    render() {
        const produtos = this.props.produtos.map((produto) => {
            return (
                <ProdutoCard
                    id = {produto.id}
                    imagem ={produto.imagem}
                    nome={produto.nome}
                    valor={produto.valor}
                    descricao = {produto.descricao}
                    key={produto.id}
                    adicionarProduto={this.props.adicionarProduto}
                />
            )
        })

        return (
            <ProdutosContainer>
                {produtos}
            </ProdutosContainer>
        )
    }
}

const ProdutosContainer = styled.div`
display: flex;
margin: auto;
flex-basis: 50%;
flex-wrap:wrap;
justify-content:space-around;
background-color:rgba(66,66,66,255);
`