import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      "black": "#000",
      "white": "#fff"
    },
    mode: "light",
    primary: {
      "contrastText": "#ffffff",
      "main": "#5664d2",
      "light": "rgb(119, 131, 219)",
      "dark": "rgb(60, 70, 147)"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      "contrastText": "#fff"
    },
    error: {
      "contrastText": "#ffffff",
      "main": "#f44336",
      "light": "rgb(246, 104, 94)",
      "dark": "rgb(170, 46, 37)"
    },
    warning: {
      "contrastText": "#ffffff",
      "main": "#ff9800",
      "light": "rgb(255, 172, 51)",
      "dark": "rgb(178, 106, 0)"
    },
    info: {
      "light": "#64b5f6",
      "main": "#2196f3",
      "dark": "#1976d2",
      "contrastText": "#fff"
    },
    success: {
      "contrastText": "#ffffff",
      "main": "#4caf50",
      "light": "rgb(111, 191, 115)",
      "dark": "rgb(53, 122, 56)"
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A100": "#d5d5d5",
      "A200": "#aaaaaa",
      "A400": "#303030",
      "A700": "#616161"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      "primary": "#172b4d",
      "secondary": "#6b778c",
      "disabled": "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      "paper": "#ffffff",
      "default": "#f4f5f7"
    },
    action: {
      "active": "#6b778c",
      "hover": "rgba(0, 0, 0, 0.04)",
      "hoverOpacity": 0.04,
      "selected": "rgba(0, 0, 0, 0.08)",
      "selectedOpacity": 0.08,
      "disabled": "rgba(0, 0, 0, 0.26)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabledOpacity": 0.38,
      "focus": "rgba(0, 0, 0, 0.12)",
      "focusOpacity": 0.12,
      "activatedOpacity": 0.12
    }
  },
});


