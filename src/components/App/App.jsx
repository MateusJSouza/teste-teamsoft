import { ThemeProvider } from 'styled-components'

import { MainContent } from '../MainContent'
import { Header } from '../Header'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'

import { Container } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <MainContent />
      </Container>
    </ThemeProvider>
  )
}
