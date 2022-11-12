import { CssBaseline, ThemeProvider } from "@mui/material"
import Dashboard from "./components/Dashboard"
import theme from "./config/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
