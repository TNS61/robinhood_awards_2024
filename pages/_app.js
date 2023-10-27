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
      <Head>
        <title>Robinhood Awards 2024</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#015DB2"></meta>
        {/*##  icon ##  */}
        {/* <link rel="icon" href={ICON_WEB.src} /> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
