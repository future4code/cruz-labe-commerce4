import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
    
export class Header extends Component {
  render() {
    return (
      <Container>
        <Typography variant='h2'>Lab Commerce</Typography>
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
  color: tomato;
`