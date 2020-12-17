import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import {
  TextField,
  Input,
  InputLabel,
  NativeSelect,
  Select
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {}
  },
  "label.MuiFormLabel-root::after": {
    content: ":",
    position: "absolute",
    color: "#9FD8FF",
    right: 0,
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
  }
}));

export default function TextSelectHorizontal(props) {
  const {
    label,
    value,
    onChange,
    items = [],
    hasBackground,
    ...option
  } = props;
  const classes = useStyles();
  return (
    <div
      className={[classes.textField]}
      style={{
        backgroundColor: hasBackground ? "rgba(159,216,255,0.24)" : ""
      }}
    >
      <InputLabel>{label}</InputLabel>
      <span className={classes.text}>:</span>
      <Select
        value={value}
        onChange={onChange}
        IconComponent={ExpandMoreIcon}
        native={true}
      >
        {items.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
