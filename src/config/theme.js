import { createTheme } from "@mui/material"
import "@fontsource/manrope"

// Global MUI theme and style overrides

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
    button: {
      textTransform: "none",
      fontSize: 18,
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#2563EB",
      dark: "#1f51bf",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#F1F5F9",
          borderRadius: 8,
          paddingLeft: 25,
        },
      },
    },
  },
})

export default theme
