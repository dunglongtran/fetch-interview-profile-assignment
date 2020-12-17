import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import {
  ArrowDropDown as ArrowDropDownIcon,
  Apps as AppsIcon
} from "@material-ui/icons";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#6389AF"
  },
  root: {
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 300,
    maxWidth: 1006,
    margin: "auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  menuButton: {
    color: "#A1D6FA"
  },
  title: {
    flexGrow: 1,
    color: "#A1D6FA",
    fontSize: "16px",
    margin: theme.spacing(2),
    fontFamily: "Mulish"
  }
}));

export default function Header() {
  const classes = useStyles();
  console.log(classes);

  return (
    <Box className={classes.root}>
      <Container>
        <Toolbar className={classes.container}>
          <div className={classes.buttons}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AppsIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} fontSize>
              All Services
            </Typography>
          </div>
          <div className={classes.buttons}>
            <Avatar
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Typography variant="h6" className={classes.title}>
              Howdy...
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
      <Divider width="100%" className={classes.divider} />
    </Box>
  );
}
