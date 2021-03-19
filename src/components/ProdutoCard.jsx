import React, { Component } from 'react'
import styled from 'styled-components'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Bitcoin } from '@styled-icons/fa-brands/Bitcoin'
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd'


export class ProdutoCard extends Component {

  render() {

    return (

      <ProdutoCardContainer>
        <CardActionArea>
          <ImageCardContainer src={this.props.imagem} alt="" />
          <Title gutterBottom variant="h5" component="h2">{this.props.nome}</Title>
          <Typography variant="body2" color="textSecondary" component="p">{this.props.descricao}</Typography>
          <CardPreco  variant="body2" color="textPrimary" component="p"><Btc size="44" /> {this.props.valor} </CardPreco>
        </CardActionArea>
        <CardActions>
          <MeuBotao   variant="contained" color="primary"
          size="small" startIcon={<Carrinho />}
            onClick={() => this.props.adicionarProduto(this.props.id)}>
            Adicionar ao carrinho
              </MeuBotao>
        </CardActions>
      </ProdutoCardContainer >
    )
  }
}

const CardPreco = styled(Typography)`
color :black;
font-size: 20px;
`
const Carrinho = styled(CartAdd)`
width: 32px;`

const Btc = styled(Bitcoin)`
color:gold;
width:24px
`

const Title = styled(Typography)`
color:blue;
`

const MeuBotao = styled(Button)`
span:first-of-type {
font-size:14px;
} 
`

const ProdutoCardContainer = styled.div`
width: 200px;
background-color:white;
border: 1px solid black;
text-align: center;
margin: 16px 12px;
display:flex;
flex-direction: column;
border-radius:4px;
`

const ImageCardContainer = styled.img`
width:100%;
height:110px;
`


