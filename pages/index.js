import { Fragment } from "react";
import Link from "next/link";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import ProfilePage from "./profile";
import HeaderBar from "../components/header-bar";
const theme = createMuiTheme({
  typography: {
    typography: {
      fontFamily: "Mulish",
      color: "#A1D6FA"
    },
    overrides: {
      MuiCssBaseline: {
        fontFamily: "Mulish",
        "@global": {
          "@font-face": "Mulish"
        }
      }
    }
  }
});

export default function IndexPage() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Box width="100%" style={{ backgroundColor: "#172038" }}>
          <HeaderBar />
          <ProfilePage />
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}
