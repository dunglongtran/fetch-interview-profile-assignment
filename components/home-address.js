import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  TextField,
  Select,
  InputAdornment,
  InputLabel,
  IconButton,
  Typography,
  Link,
  Input,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {},
    backgroundColor: "#172038"
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
      padding: theme.spacing(1),
      fontFamily: "Mulish"
    }
  },
  groupLeft: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
  },
  groupRight: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
  }
}));

export default function HomeAddress(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={[classes.groupLeft]}>
        <Typography className={[classes.text]}>Home Address</Typography>
        <TextField
          InputLabelProps={{
            shrink: true
          }}
          label="Address"
          fullWidth
          multiline
          rows={4}
          placeholder="Address"
          className={classes.textField}
        />
      </Grid>
      <Grid item xs={6} className={[classes.groupRight]}>
        <TextField
          InputLabelProps={{
            shrink: true
          }}
          label="Town/City"
          placeholder="Town/City"
          className={classes.textField}
        />
        <TextField
          label="Postal Code"
          defaultValue="0000"
          className={classes.textField}
        />
      </Grid>
    </Grid>
  );
}
