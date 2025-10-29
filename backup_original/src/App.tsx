import { Main } from './components/Main'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'
import { ParallaxProvider } from 'react-scroll-parallax'
import { FloatingSocialIcons } from './components/FloatingSocialIcons'

function App() {
  return (
    <>
      <ParallaxProvider>
        <ThemeProvider theme={defaultTheme}>
          <Main />
          <FloatingSocialIcons />
          <GlobalStyle />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  )
}

export default App
