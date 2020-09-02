import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#55893d"
        },
        secondary: {
            main: "#88bd40"
        }
    
    },
    typography: {
      fontFamily: "'Raleway', Sans-Serif",
      h1: {
        fontFamily: "'Raleway', Sans-Serif",
        textPrimary: '#FFFFFF',
        textSecondary: "#55893d",
        textTransform: 'capitalize',
      },
      h2: {
        fontFamily: "'Open Sans', Sans-Serif",
        fontSize: 40,
        textPrimary: '#FFFFFF',
        textSecondary: "#55893d",
        textTransform: 'capitalize',
      },
      body1: {
        fontFamily: "'Open Sans', Sans-Serif",
        fontSize: 16,
        textPrimary: '#FFFFFF',
        textSecondary: '#000000',
      }, 
      button: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 20,
        color: '#FFFFFF',
        textTransform: 'capitalize',
      },
      signOutButton: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 20,
        color: 'secondayr',
      }

    }
});
