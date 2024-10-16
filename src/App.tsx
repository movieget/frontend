import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes/AppRoutes'
import useDarkModeStore from './stores/darkModeStore'
import theme from './styles/theme'
import CommonLayout from './components/Layout/CommonLayout'
import ResetCSS from './styles/ResetCSS'

function App() {
  const { isDarkMode } = useDarkModeStore()
  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <ResetCSS />
        <CommonLayout>
          <AppRoutes />
        </CommonLayout>
      </ThemeProvider>
    </>
  )
}

export default App
