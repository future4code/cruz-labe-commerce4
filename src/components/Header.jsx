import React, { Component } from 'react'
import styled from 'styled-components'
    
export class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Lab Commerce</Title>
      </Container>
    )
  }
}

const Container= styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
`

const Title = styled.div`
  font-size: 4rem;
`