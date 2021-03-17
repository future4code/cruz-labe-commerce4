import React, { Component } from 'react'
import styled from 'styled-components'
import ProdutoCard from './ProdutoCard'
class Produtos extends Component{
    render() {
        return(
            <ProdutosContainer>
                <ProdutoCard/>
                <ProdutoCard/>
                <ProdutoCard/>
                <ProdutoCard/>
                <ProdutoCard/>
                <ProdutoCard/>
            </ProdutosContainer>
        )
    }
}

export default Produtos



const ProdutosContainer = styled.div`
display: flex;
margin: auto;
flex-basis: 50%;
flex-wrap:wrap;
justify-content:space-around;
`