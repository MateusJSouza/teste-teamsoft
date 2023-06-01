import { ThemeProvider } from 'styled-components'

import { Header } from '../Header'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'

import { Container } from './styles'
import { MainContent } from '../MainContent'

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
