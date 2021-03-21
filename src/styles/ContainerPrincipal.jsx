import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #212121;
  }
`

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
})

export const ContainerPrincipal = (props) => {
  return (
    
      <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Container>
        {props.children}
      </Container>
      </MuiThemeProvider>
  )

}

const Container = styled.div`
  width: 100%;
  min-width: 350px;
  //max-width: 1280px;

  display: flex;
  flex-flow: row wrap;

  margin: 0 auto;
`
