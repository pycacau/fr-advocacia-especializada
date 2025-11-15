import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-padding-top: 140px;

    @media (max-width: 600px) {
      scroll-padding-top: 120px;
    }
  }

  /* Garantir que o header fique acima do overlay do PrimeReact Sidebar */
  .p-sidebar-mask {
    z-index: 999 !important;
  }

  .p-sidebar {
    z-index: 1000 !important;
  }

  /* Garantir que elementos do header sejam clicáveis e fiquem acima de tudo */
  header {
    pointer-events: auto !important;
    z-index: 9999 !important;
  }

  header * {
    pointer-events: auto !important;
  }

  /* Garantir que nav dentro do header seja clicável */
  header nav {
    z-index: 10001 !important;
  }

  header nav a {
    z-index: 10002 !important;
  }

  header nav a button {
    z-index: 10003 !important;
  }
`
