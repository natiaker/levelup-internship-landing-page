import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(238, 40%, 52%)",
      light: "hsl(239, 57%, 85%)",
    },
    background: {
      default: "#1c1d1e",
      secondary: "#2C3234",
      active: "#EF5A21",
    },
    text: {
      primary: "#ffffff",
      secondary: "hsl(212, 24%, 26%)",
    },
  },
});

export default theme;
