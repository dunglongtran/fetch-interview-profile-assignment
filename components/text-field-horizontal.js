import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  TextField,
  InputAdornment,
  IconButton,
  Input,
  InputLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {}
  },
  verify: {
    color: "#9FD8FF",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    fontFamily: "Mulish"
  },
  text: { color: "#A1D6FA", fontFamily: "Mulish" },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "& .MuiFormLabel-root": {
      color: "#9FD8FF",
      width: "30%",
      position: "relative",
      fontFamily: "Mulish"
    },
    "& label.MuiFormLabel-root::after": {
      content: ":",
      position: "absolute",
      color: "#9FD8FF",
      right: 0,
      fontFamily: "Mulish"
    },
    "& .MuiInputBase-input": {
      color: "#9FD8FF",
      fontFamily: "Mulish"
    },
    "& .MuiInputBase-root::before": {
      display: "none"
    },
    "& .MuiInputBase-root": {
      padding: theme.spacing(1),
      flex: "auto"
    },
    "& .MuiSvgIcon-root": {
      color: "#9FD8FF",
      width: 32,
      height: 32,
      top: "calc( 50% - 16px)",
      right: 16
    }
  },
  label: {
    "&::after": {
      content: ":",
      position: "absolute",
      color: "#9FD8FF",
      right: 0
    }
  }
}));

export default function TextFieldHorizontal(props) {
  const {
    label,
    value,
    icon,
    optionClass = [],
    hasBackground,
    ...option
  } = props;
  const classes = useStyles();
  return (
    <div
      className={[classes.textField, ...optionClass].join(" ")}
      style={{
        backgroundColor: hasBackground ? "rgba(159,216,255,0.24)" : ""
      }}
    >
      <InputLabel>{label}</InputLabel>
      <span className={classes.text}>:</span>
      <Input
        value={value}
        {...option}
        endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
      />
    </div>
  );
}
