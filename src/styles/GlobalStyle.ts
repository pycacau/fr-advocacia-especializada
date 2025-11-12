import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-padding-top: 140px;

    @media (max-width: 600px) {
      scroll-padding-top: 120px;
    }
  }
`
