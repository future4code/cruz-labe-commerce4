import React, { Component } from 'react'
import styled from 'styled-components'
import { ProdutoCard } from './ProdutoCard'
import Typography from '@material-ui/core/Typography'

/// recebe a props produtos = lista de produtos
// this.props.produtos[0].nome = [ {nome: 'falcon1' valor: 1000}, {nome: valor: }]
export class Produtos extends Component {
    render() {

        let { produtos } = this.props
        
        if (produtos.length) {
            produtos = produtos.map((produto) =>
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
        } else {
          produtos = <Typography>Nenhum item com esse filtro...</Typography>
        }

        return (
            <ProdutosContainer>
                {produtos}
            </ProdutosContainer>
        )
    }
}

const ProdutosContainer = styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;
justify-content: space-around;
`