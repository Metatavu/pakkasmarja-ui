import { createTheme, darkScrollbar } from "@mui/material";

/**
 * Values from default theme to use in custom theme
 */
const { breakpoints, palette } = createTheme();

/**
 * Custom theme for Material UI
 */
export default createTheme({

  palette: {
    primary: {
      main: "#E51D2A",
      light: "#FF5E54",
      dark: "#AA0001",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#2A4269",
      light: "#586D97",
      dark: "#001C3E",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#333333",
      secondary: "#ffffff"
    },
    background: {
      default: "#F7F7F7",
      paper: "#ffffff"
    }
  },

  typography: {
    allVariants: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 300
    },
    h1: {
      fontSize: 32,
      [breakpoints.down("sm")]: {
        fontSize: "1.75rem"
      }
    },
    h2: {
      fontSize: 28
    },
    h3: {
      fontWeight: "normal",
      fontSize: 24
    },
    h4: {
      fontWeight: "normal",
      fontSize: 24
    },
    h5: {
      fontWeight: "normal",
      fontSize: 24
    },
    h6: {
      fontWeight: "bold",
      fontSize: 20
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 14
    },
    subtitle1: {
      fontWeight: "normal",
      fontSize: 16
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 14
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          a: {
            textDecoration: "none"
          }
        },
        body: palette.mode === "dark" ? darkScrollbar() : null
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 2,
        position: "fixed"
      },
      styleOverrides: {
        root: {
          height: 72,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        colorPrimary: {
          backgroundColor: "#fff"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "100%"
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.54)"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small"
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          alignItems: "center",
          justifyContent: "space-between"
        }
      }
    }
  }

});