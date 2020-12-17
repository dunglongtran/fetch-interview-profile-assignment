import { useState } from "react";
import Container from "@material-ui/core/Container";
import { fade, makeStyles } from "@material-ui/core/styles";

import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1F2744"
  },
  appBar: {
    backgroundColor: "transparent",
    borderBottom: "1px solid #6389AF"
  },
  tabs: {
    "& span.MuiTabs-indicator": {
      backgroundColor: "#9FD8FF"
    }
  },

  tab: {
    "& svg": {
      marginRight: theme.spacing(1)
    },
    "& .MuiTab-wrapper": {
      display: "flex",
      flexDirection: "row",
      textTransform: "capitalize",
      color: "#6389AF",
      fontFamily: "Mulish"
    },
    "&.Mui-selected span.MuiTab-wrapper": {
      color: "#C0E4FF"
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

function renderTabs(tabs = [], className) {
  return tabs.map((tab, index) => (
    <Tab
      key={`scrollable-force-tab-${index}`}
      className={className}
      label={tab.label}
      icon={tab.icon}
      {...a11yProps(index)}
    />
  ));
}

export default function TabBar(props) {
  const classes = useStyles();
  const { tabIndex, onChange, tabs = [] } = props;

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Tabs
        value={tabIndex}
        onChange={onChange}
        className={classes.tabs}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        {renderTabs(tabs, classes.tab)}
      </Tabs>
    </AppBar>
  );
}
