import { createTheme } from "@mui/material/styles";

const GeneratheTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#0077b6",
      },
      secondary: {
        main: "#8338ec",
      },
      text: {
        gray: "#434343",
      },
    },
  });

export default GeneratheTheme;
