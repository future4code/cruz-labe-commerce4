import React, { Component } from 'react'
import styled from 'styled-components'
import { ProdutoCard } from './ProdutoCard'

export class Produtos extends Component{
    render() {
        return(
            <ProdutosContainer>
                <ProdutoCard
                produto='objeto com dados do produto'
                key={1}
                adicionarProduto={this.props.adicionarProduto} />
                <ProdutoCard key={2}/>
                <ProdutoCard key={3}/>
                <ProdutoCard key={4}/>
                <ProdutoCard key={5}/>
                <ProdutoCard key={6}/>
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
`