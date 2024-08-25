import { blue, grey, red } from '@mui/material/colors'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    },
    error: {
      main: red[500],
    },
    background: {
      default: '#f4f4f4',
    },
    action: {
      disabledBackground: '#A1B1E7',
      disabled: 'white',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'Inter', 'Roboto'].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 40,
          fontWeight: 700,
          lineHeight: '52px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 20px',
          boxShadow: 'none',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: grey[500],
          '&.Mui-checked': {
            color: blue[500],
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            minHeight: 47,
            zIndex: 0,
            marginBlock: '4px',
            borderRadius: 10,
            backgroundColor: 'white',
          },
          '& .MuiTabs-flexContainer': {
            padding: '4px',
            borderRadius: 10,
            backgroundColor: '#f4f4f4',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          width: '50%',
          minHeight: 47,
          borderRadius: 10,
          padding: 0,
          color: 'black',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
          ].join(','),
          '&.Mui-selected': {
            color: 'black',
            backgroundColor: 'transparent',
            zIndex: 2,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          borderColor: grey[800],
          '&:hover': {
            borderColor: grey[500],
          },
          '&.Mui-focused': {
            borderColor: blue[500],
          },
        },
        input: {
          padding: '10px 12px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: red[500],
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
