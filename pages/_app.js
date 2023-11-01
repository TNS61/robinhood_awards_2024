import { FAVICON } from "@/assets";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Kanit"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
