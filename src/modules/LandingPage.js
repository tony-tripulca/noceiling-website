import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import MainNav from "../components/MainNav";
import SocialNav from "../components/SocialNav";
import PageBanner from "./PageBanner";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#c7ab59",
        main: "#c7ab59",
        dark: "#c7ab59",
        contrastText: "white",
      },
      plain: {
        light: "white",
        main: "white",
        dark: "white",
        contrastText: "gray",
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          dense: {
            height: 32,
            minHeight: 32,
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SocialNav></SocialNav>
        <MainNav></MainNav>
        <PageBanner></PageBanner>
      </ThemeProvider>
    </React.Fragment>
  );
}
