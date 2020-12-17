import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {}
  },
  details: {
    backgroundColor: "#172038",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
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
    "& .MuiFormLabel-root": {
      color: "rgba(159, 216, 255, 0.36)",
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
      backgroundColor: "rgba(159,216,255,0.24)",
      padding: theme.spacing(1)
    },
    "& .MuiSvgIcon-root": {
      color: "#9FD8FF",
      width: 32,
      height: 32,
      top: "calc( 50% - 16px)",
      right: 16
    }
  }
}));

export default function TextFieldSelect(props) {
  const { label, value, onChange, items = [] } = props;
  const classes = useStyles();
  return (
    <TextField
      select
      label={label}
      value={value}
      className={[classes.textField]}
      onChange={onChange}
      SelectProps={{
        native: true,
        IconComponent: ExpandMoreIcon
      }}
    >
      {items.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}
