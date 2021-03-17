import React, { Component } from 'react'
import styled from 'styled-components'
class ProdutorCard extends Component {
    render() {
        return (

            <ProdutoCardContainer>
                <ImageCardContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSG5wARPg3AdhgNkGObgy295r89E2PAzZWQ&usqp=CAU" alt="" />
                <p>Falcon 9</p>
                <p>Foguete maneiro!</p>
                <p>R$1300,00 </p>
                <ButtonCardContainer>Adicionar ao carrinho</ButtonCardContainer>
            </ProdutoCardContainer>
            // console.log("")
        )
    }
}

export default ProdutorCard

const ProdutoCardContainer = styled.div`
width: 200px;
background-color:yellow;
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


