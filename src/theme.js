import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    mode: "dark",
    primary: {
      contrastText: "#ffffff",
      main: "#5664d2",
      light: "rgb(119, 131, 219)",
      dark: "rgb(60, 70, 147)",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      contrastText: "#ffffff",
      main: "#f44336",
      light: "rgb(246, 104, 94)",
      dark: "rgb(170, 46, 37)",
    },
    warning: {
      contrastText: "#ffffff",
      main: "#ff9800",
      light: "rgb(255, 172, 51)",
      dark: "rgb(178, 106, 0)",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      contrastText: "#ffffff",
      main: "#4caf50",
      light: "rgb(111, 191, 115)",
      dark: "rgb(53, 122, 56)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#ffffff",
      default: "#f4f5f7",
    },
    action: {
      active: "#6b778c",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.167,
      "@media (min-width:600px)": {
        fontSize: "2.7849rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3.2134rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "3.4276rem",
      },
    },
    h2: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.2,
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.7083rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2.9167rem",
      },
    },
    h3: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "1.625rem",
      lineHeight: 1.167,
      "@media (min-width:600px)": {
        fontSize: "1.928rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.1422rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2.3565rem",
      },
    },
    h4: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.235,
      color: "rgb(23, 43, 77)",
      "@media (min-width:600px)": {
        fontSize: "1.8219rem",
      },

      "@media (min-width:1280px)": {
        fontSize: "2.0243rem",
      },
    },
    h5: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.334,
      "@media (min-width:600px)": {
        fontSize: "1.3118rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.4993rem",
      },
    },
    h6: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      "@media (min-width:600px)": {
        fontSize: "1.0938rem",
      },
    },
    subtitle1: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    subtitle2: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      color: "rgb(23, 43, 77)",
    },
    body1: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      color: "rgb(107, 119, 140)",
    },
    button: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      color: "rgb(107, 119, 140)",
    },
    overline: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      textTransform: "uppercase",
      color: "rgb(107, 119, 140)",
    },
  },
});
