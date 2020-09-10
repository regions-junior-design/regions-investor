import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#528400"
        },
        secondary: {
            main: "#88bb00"
        }
    
    },
    spacing: 8,
    typography: {
      fontFamily: "'Raleway', Sans-Serif",
      h1: {
        fontFamily: "'Source Sans Pro', sans-serif",
        textPrimary: "rgb(51, 51, 51)",
        textSecondary: "#55893d",
        textTransform: 'capitalize',
        fontSize: 46,
        fontWeight: "bold",
      },
      h2: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 37,
        textPrimary: "rgb(51, 51, 51)",
        textSecondary: "#55893d",
        textTransform: 'capitalize',
      },
      h3: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 28,
        textPrimary: '#FFFFFF',
        textSecondary: "#55893d",
        marginBottom: '10px'
      },
      body1: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 18,
        textPrimary: "rgb(51, 51, 51)",
      }, 
      button: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: 20,
        color: "#ffffff",
        marginBottom: 10,
        textTransform: 'capitalize',
      },
      signOutButton: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 20,
        color: 'secondayr',
      },
      label: {
        fontFamily: "'Raleway', Sans-Serif",
        fontSize: 20,
        color: '#FFFFFF',
        margin: '100px'
      }

    }
});
