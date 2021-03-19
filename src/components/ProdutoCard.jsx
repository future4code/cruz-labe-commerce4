import React, { Component } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Bitcoin } from '@styled-icons/fa-brands/Bitcoin'
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd'
import { spacing } from '@material-ui/system';
// import { listaProdutos } from './assets/json'


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


const theme = {
  spacing: 8
}

const CardPreco = styled(Typography)`
`
const Carrinho = styled(CartAdd)`
width: 32px;`

const Btc = styled(Bitcoin)`
background-color:black;
color:red;
width:24px`

const Title = styled(Typography)`
color:blue;

`

const MeuBotao = styled(Button)`
span:first-of-type {
  /* color: red;z-index:2;  */
font-size:14px;
} 
`

const ProdutoCardContainer = styled.div`
width: 200px;
background-color:white;
border: 1px solid black;
text-align: center;
margin-bottom: 16px;
display:flex;
flex-direction: column;
border-radius:4px;

`
const ImageCardContainer = styled.img`
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



